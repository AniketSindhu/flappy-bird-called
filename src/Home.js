import { useEffect } from "react";
import Navbar from "./cmp/Navbar";
import db from "./firebase/firebase";
import { getDoc, doc } from "firebase/firestore";

function Home() {
	// const [scores, setScores] = useState("default");
	// const addData = async () => {
	// 	try {
	// 		const docRef = await setDoc(doc(db, "highScores", 1), {
	// 			todo: "0",
	// 		});
	// 		console.log("Data Successfully inserted into Db with Id => ", docRef.id);
	// 	} catch (error) {
	// 		console.error("error inserting Document:", error);
	// 	}
	// };
	const fetchData = async () => {
		try {
			// await getDocs(collection(db, "highScores")).then((querySnapshot) => {
			// 	const newData = querySnapshot.docs.map((doc) => ({
			// 		...doc.data(),
			// 		id: doc.id,
			// 	}));
			// 	setScores(newData);
			// 	console.log(scores, newData);
			// });
			const userRef = doc(db, "highScores", "0");
			const snapShot = await getDoc(userRef);
			if (snapShot.exists()) {
				const exist = true;
				const userScoreData = snapShot.data();
				const userScore = userScoreData.score;
				console.log("Fetch Data => ", { exist, userScoreData, userScore });
			} else {
				console.log("Doesnt exist");
			}
		} catch (error) {
			console.error("error fetching Data => ", error);
		}
	};
	// const updateData = async (score = 1) => {
	// 	try {
	// 		// const userRef = query(
	// 		// 	collection(db, "highScores"),
	// 		// 	where("userId", "==", "1")
	// 		// );
	// 		// const findUserData = await getDocs(userRef);
	// 		// console.log("Found Data =>", findUserData);
	// 		// const foundUserData = doc(db, "highScores", findUserData.id);
	// 		// await updateDoc(foundUserData, {
	// 		// 	score: score,
	// 		// });
	// 		const userRef = doc(db, "highScores", "0");
	// 		await updateDoc(userRef, {
	// 			score: "34",
	// 		});
	// 	} catch (error) {
	// 		console.error("Error updating collection =>", error);
	// 	}
	// };

	useEffect(() => {
		fetchData();
	});
	return (
		<>
			<Navbar></Navbar>
			<div className="w-[80%] bg-white m-auto">
				<div className=" bg-blue mx-5">
					<h1 className="text-white p-12">Flappy Bird game</h1>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<div className="text-white justify-center m-auto">
					<h1>Flappy Bird Leader Board</h1>
					<button
						onClick={() => {
							fetchData();
						}}
					>
						Send to Db
					</button>
				</div>
				<div className="m-5 p-5">
					<table className="text-white min-w-full text-center">
						<thead className="text-lg font-light dark:border-neutral-500 border">
							<tr>
								<th>Rank</th>
								<th>username</th>
								<th>highscore</th>
							</tr>
						</thead>
						<tbody>
							<tr className="dark:border-neutral-100 ">
								<td>1</td>
								<td>Olinks</td>
								<td>250</td>
							</tr>
							<tr className="dark:border-neutral-100 border-y">
								<td>2</td>
								<td>Olinks</td>
								<td>250</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
export default Home;
