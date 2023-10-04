import db from "./firebase/firebase";
import { getDoc, setDoc, doc, updateDoc } from "firebase/firestore";

const addData = async () => {
	try {
		// const docRef = await setDoc(doc(db, "highScores", 1), {
		// 	todo: "0",
		// });
		// console.log("Data Successfully inserted into Db with Id => ", docRef.id);
	} catch (error) {
		console.error("error inserting Document:", error);
	}
};
const fetchUser = async (userId) => {
	const userRef = doc(db, "users", userId.toString());
	const snapShot = await getDoc(userRef);
	// console.log("userSnapshot => ", snapShot.data());
	if (snapShot.exists()) {
		// console.log("user Exist");
		const userExist = true;
		const userData = snapShot.data();
		return { userExist, userData };
	} else {
		return {
			userExist: false,
			userData: {},
		};
	}
};
const fetchUserScore = async (userId) => {
	try {
		const { userExist } = await fetchUser(userId);

		if (userExist) {
			const userRef = doc(db, "flappyBirdhighScores", userId.toString());
			const snapShot = await getDoc(userRef);
			if (snapShot.exists()) {
				const scoreExist = true;
				const userScoreData = snapShot.data();
				const userScore = userScoreData.score;
				return { scoreExist, userScoreData, userScore };
			} else {
				return {
					scoreExist: false,
					userScoreData: undefined,
					userScore: undefined,
				};
			}
		}
	} catch (error) {
		console.error("error fetching Data => ", error);
	}
};
const updateUserScore = async (score, userId) => {
	try {
		const { userData } = await fetchUser(userId);
		const { scoreExist, userScore } = await fetchUserScore(userId);
		if (scoreExist) {
			if (parseFloat(score) > parseFloat(userScore)) {
				const userRef = doc(db, "flappyBirdhighScores", userId.toString());
				await updateDoc(userRef, {
					address: userData.address,
					username: userData.userName,
					score: score,
					timestamp: Date.now(),
				});
			}
		} else {
			await setDoc(doc(db, "flappyBirdhighScores", userId.toString()), {
				address: userData.address,
				username: userData.userName,
				userId: userId.toString(),
				score: score,
				timestamp: Date.now(),
			});
		}
		// } else {
		// 	console.error("User does not exist");
		// }
	} catch (error) {
		console.error("Error updating collection =>", error);
	}
};

export { addData, updateUserScore, fetchUserScore };
