import { assert, createEventHook } from "@vueuse/core";
import { ref, watch, computed } from "vue";
import {
    isArrayEqual,
    deepClone,
    rotateMatrix,
    rotateCoordinate,
} from "./array";
import { Direction, direction2rotation } from "./2048";
import { triggerRow, triggerColumn, triggerBomb, triggerHeal } from "./prop";
import { createRandom } from "./createRandom";
let id = 0;
const createId = () => (id += 1);

export const MAX_HP = 1000;

export type Status = "normal" | "frozen" | "row" | "column" | "bomb" | "heal";
type Tile = [number, number, Status] | null;
export type Board = Tile[][];

export function use2048Duel() {
    const onMoveHook = createEventHook<Direction>();
    const onWonHook = createEventHook<void>();
    const onAttackHook = createEventHook<number>();
    const onDefeatHook = createEventHook<void>();
    const onSetpropHook = createEventHook<[number, number, Status]>();
    const onHPchangeHook = createEventHook<number>();
    const onDeleteHook = createEventHook<[number, number]>();
    const onFrozenHook = createEventHook<Status>();

    const seed = ref(Math.random());
    let rand = createRandom(seed.value);
    const prop_num=ref([2,2,2,5]);
    const damage = ref(0);
    const score = ref(0);
    const hp = ref(MAX_HP);
    const trigger_pos = ref([-1, -1]);
    const rows = ref(4);
    const cols = ref(4);
    const board = ref<Board>(
        Array.from({ length: rows.value }).map(() =>
            Array.from({ length: cols.value }).map(() => null)
        )
    );
    const hasWon = ref(false);
    const isStuck = ref(false);
    const isGameOver = ref(false);
    const count_frozen = ref(3);

    watch(hasWon, () => {
        if (hasWon.value === true) {
            onWonHook.trigger();
        }
    });

    watch(isStuck, () => {
        if (isStuck.value === true) {
            onDefeatHook.trigger();
        }
    });

    const checkIsStuck = (board: Board) => {
        const row_num = board.length;
        const col_num = board[0].length;

        for (let i = 0; i < row_num; i++) {
            for (let j = 0; j < col_num; j++) {
                if (board[i][j] === null) {
                    return false;
                }
                if (
                    i < row_num - 1 &&
                    board[i][j] &&
                    board[i + 1][j] &&
                    board[i][j]![0] === board[i + 1][j]![0]
                ) {
                    return false;
                }
                if (
                    j < col_num - 1 &&
                    board[i][j] &&
                    board[i][j + 1] &&
                    board[i][j]![0] === board[i][j + 1]![0]
                ) {
                    return false;
                }
                if (board[i][j]![0] >= 64) return false;
            }
        }

        return true;
    };

    const setRandomTile = (board: Board, status: Status) => {
        const value = rand() < 0.9 ? 2 : 4;
        const i = rand(0, rows.value - 1);
        const j = rand(0, cols.value - 1);

        if (board[i][j] !== null) {
            setRandomTile(board, status);
        } else {
            if(status!=="frozen") board[i][j] = [value, createId(), status];
            else if (status === "frozen" && count_frozen.value > 0) {
                board[i][j] = [value, createId(), status];
                onFrozenHook.trigger(status);
                count_frozen.value--;
            }
            
        }

        if (checkIsStuck(board)) {
            isStuck.value = true;
        }

        return board;
    };

    const initialize = (_seed?: number) => {
        score.value = 0;
        hp.value = MAX_HP;
        isGameOver.value = false;
        isStuck.value = false;
        hasWon.value = false;
        count_frozen.value = 3;
        prop_num.value=[2,2,2,5]

        if (_seed) {
            seed.value = _seed;
            rand = createRandom(_seed);
        }

        let brd: Board = Array.from({ length: rows.value }).map(() =>
            Array.from({ length: cols.value }).map(() => null)
        );
        brd = setRandomTile(brd, "normal");
        brd = setRandomTile(brd, "normal");

        board.value = brd;
    };

    const move = (direction: Direction) => {
        let brd = deepClone(board.value);
        const rotation_times = direction2rotation(direction);

        brd = rotateMatrix(brd, rotation_times);
        const row_num = brd.length;
        const col_num = brd[0].length;

        for (let j = 0; j < col_num; j++) {
            const temp: Tile[] = [];

            for (let i = 0; i < row_num; i++) {
                if (brd[i][j] !== null) {
                    temp.push(brd[i][j]);
                    brd[i][j] = null;
                }
            }

            let pos = 0;
            const n = temp.length;
            for (let k = 0; k < n; k++) {
                if (
                    k < n - 1 &&
                    temp[k]![0] === temp[k + 1]![0] &&
                    temp[k]![2] !== "frozen" &&
                    temp[k + 1]![2] !== "frozen"
                ) {
                    const new_value = temp[k]![0] * 2;
                    const new_id = temp[k + 1]![1];

                    let new_status = "normal";
                    if (temp[k]![2] !== "normal" && temp[k + 1]![2] === "normal") {
                        new_status = temp[k]![2];
                    }
                    if (temp[k]![2] === "normal" && temp[k + 1]![2] !== "normal") {
                        new_status = temp[k + 1]![2];
                    }

                    if (new_status !== "normal") {
                        trigger_pos.value = [pos, j];
                        trigger_pos.value = rotateCoordinate(
                            trigger_pos.value,
                            4,
                            4 - rotation_times
                        );
                    }

                    brd[pos][j] = [new_value, new_id, new_status];
                    k++;

                    damage.value += new_value;
                    score.value += new_value;
                } else {
                    brd[pos][j] = temp[k];
                }
                pos++;
            }
        }

        brd = rotateMatrix(brd, 4 - rotation_times);

        if (!isArrayEqual(brd, board.value)) {
            brd = setRandomTile(brd, "normal");
        }

        board.value = brd;

        onAttackHook.trigger(damage.value);
        damage.value = 0;
        onMoveHook.trigger(direction);
    };

    const up = () => move("up");
    const down = () => move("down");
    const left = () => move("left");
    const right = () => move("right");

    const biggestTile = computed(() => {
        let max_num = 0;
        let tile_i = 0;
        let tile_j = 0;
        const row_num = board.value.length;
        const col_num = board.value[0].length;

        for (let i = 0; i < row_num; i++) {
            for (let j = 0; j < col_num; j++) {
                if (board.value[i][j] !== null) {
                    if (board.value[i][j]![0] > max_num) {
                        max_num = board.value[i][j]![0];
                        tile_i = i;
                        tile_j = j;
                    }
                }
            }
        }

        return [max_num, tile_i, tile_j];
    });

    const deleteTile = (i: number, j: number) => {
        damage.value += board.value[i][j]![0];
        triggerTileProp([i, j]);
        board.value[i][j] = null;
        onDeleteHook.trigger([i, j]);
        onAttackHook.trigger(damage.value);
        damage.value = 0;
    };

    const setTileProp = (i: number, j: number, status: Status) => {
        if (board.value[i][j] === null) {
            return;
        }
        board.value[i][j]![2] = status;
        onSetpropHook.trigger([i, j, status]);
    };

    const triggerTileProp = (pos: number[]) => {
        assert(pos.length === 2);

        const i = pos[0];
        const j = pos[1];

        let _damage = 0;

        if (board.value[i][j] === null) {
            return;
        }
        const status = board.value[i][j]![2];

        switch (status) {
            case "row":
                [_damage, board.value] = triggerRow(i, j, board.value);
                break;
            case "column":
                [_damage, board.value] = triggerColumn(i, j, board.value);
                break;
            case "bomb":
                [_damage, board.value] = triggerBomb(i, j, board.value);
                break;
            case "heal":
                setHP(triggerHeal(i, j, board.value, hp.value));
                break;
            default:
                return;
        }

        damage.value += _damage;
        board.value[i][j]![2] = "normal";
    };

    const striked = (_damage: number) => {
        if (hp.value - _damage <= 0) {
            setHP(0);
            isGameOver.value = true;
            onDefeatHook.trigger();
        } else setHP(hp.value - _damage);
    };

    const setHP = (_hp: number) => {
        hp.value = _hp;
        onHPchangeHook.trigger(hp.value);
    };

    return {
        board,
        score,
        hp,
        trigger_pos,
        isStuck,
        isGameOver,
        hasWon,
        biggestTile,
        prop_num,
        initialize,
        setRandomTile,
        deleteTile,
        setTileProp,
        triggerTileProp,
        move,
        up,
        down,
        left,
        right,
        striked,
        setHP,
        onWon: onWonHook.on,
        onMove: onMoveHook.on,
        onAttack: onAttackHook.on,
        onDefeat: onDefeatHook.on,
        onSetprop: onSetpropHook.on,
        onHPchange: onHPchangeHook.on,
        onDelete: onDeleteHook.on,
        onFrozen: onFrozenHook.on,
    };
}
