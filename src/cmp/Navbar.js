import React from "react";
import Banner from "../asset/sprites/blockbetIcon.png";

function Navbar() {
	return (
		<>
			<div className="text-white flex flex-row gap-12 p-2 justify-center">
				<div className="w-16 h-16">
					<img src={Banner} alt="blockbetLogo"></img>
				</div>
				<div className="mt-5">
					<div>
						<ul className="flex flex-row gap-2">
							<li className="bg-[#eb540e] p-2 rounded-sm">Leaderboard</li>
							<li className="bg-[#eb540e] p-2 rounded-sm">About</li>
							<li className="bg-[#eb540e] p-2 rounded">Connect Wallet</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
