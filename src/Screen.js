import React, { useEffect, useReducer, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { STYLES, MAX_PIPE_HEIGHT_PERCENT, SCREEN_HEIGHT } from "./constant";
import { getStateOfTime, randomHeightPipe } from "./util";
import { initialState, reducer } from "./reducer";
import { Bird } from "./cmp/Bird";
import { Pipe } from "./cmp/Pipe";
import { Ground } from "./cmp/Ground";
import { Restart } from "./cmp/Restart";
import { Score } from "./cmp/Score";

// db
import { updateUserScore, fetchUserScore } from "./FireStoreCRUD";

import backgroundDayImg from "./asset/sprites/background-day.png";
import backgroundNightImg from "./asset/sprites/background-night.png";
import instructionImg from "./asset/sprites/instruction.png";

function Screen() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [updated, setUpdated] = useState(false);
	const backgroundByTime = useRef(
		getStateOfTime() ? backgroundDayImg : backgroundNightImg
	);
	const [queryParameters] = useSearchParams();
	const userId = queryParameters.get("userId");
	// const code = queryParameters.get("code");

	// console.log("UserId => ", userId);
	// console.log("Code => ", code);
	useEffect(() => {
		if (state.gameover) {
			if (!updated) {
				console.log("gameOver");
				// console.log("score => ", state.score);
				updateUserScore(parseFloat(state.score), userId);
				setUpdated(true);
			}
		}
	}, [state, userId, updated]);

	if (userId != null) {
		return (
			<div
				style={{
					...STYLES.SCREEN,
					backgroundImage: `url(${backgroundByTime.current})`,
				}}
			>
				{state.running && !state.gameover && (
					<Score score={state.score} display={"SCREEN"} />
				)}
				{!state.running && !state.gameover && (
					<img
						style={{ ...STYLES.INSTRUCTION }}
						src={instructionImg}
						alt="instruction"
					/>
				)}
				<Bird {...state} dispatch={dispatch} />
				<Pipe
					{...state}
					initX={state.pipe.initX}
					height={randomHeightPipe(SCREEN_HEIGHT, MAX_PIPE_HEIGHT_PERCENT)}
					dispatch={dispatch}
				/>

				<Pipe
					{...state}
					initX={state.pipe.initX * 1.5 + state.pipe.w / 2}
					height={randomHeightPipe(SCREEN_HEIGHT, MAX_PIPE_HEIGHT_PERCENT)}
					dispatch={dispatch}
				/>
				<Ground gameover={state.gameover} />
				{Boolean(state.gameover) && <Restart score={state.score} />}
				{/* {state.gameover && updateData(state.score)} */}
			</div>
		);
	} else {
		return (
			<>
				<div>
					<p className="text-white">
						Please Use link from the Bot{" "}
						<a
							className=" text-blue-500"
							href="
					http://t.me/blockbetgame_bot"
						>
							BlockBet Games Bot
						</a>
					</p>
				</div>
			</>
		);
	}
}

export default Screen;
