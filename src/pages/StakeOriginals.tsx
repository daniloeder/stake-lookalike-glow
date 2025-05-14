
import React from 'react';
import GamesPage from "./GamesPage";

const stakeOriginalsInfo = `
  <p><strong>Stake Originals</strong> are proprietary games developed in-house by the Stake.com team. These games offer a unique and engaging gambling experience, with many featuring provably fair technology that allows players to verify the fairness of each round.</p>
  <p>Our Stake Originals collection includes a wide variety of game types, from classics like <strong>Dice</strong> and <strong>Blackjack</strong> to innovative titles like <strong>Mines</strong>, <strong>Plinko</strong>, and <strong>Crash</strong>. Each game is designed with user experience in mind, featuring intuitive interfaces, transparent mechanics, and competitive house edges.</p>
  <p>What sets Stake Originals apart is the combination of simplicity and strategy. While the games are easy to understand, they offer depth for players who want to develop their own approaches and betting systems. Whether you prefer games of pure chance or those that involve an element of skill, you'll find something to enjoy in our Stake Originals collection.</p>
  <p>New titles are regularly added to our lineup, so be sure to check back often to see what's new in the world of Stake Originals!</p>
`;

const StakeOriginals = () => {
  return (
    <GamesPage 
      title="Stake Originals" 
      infoTitle="Play Stake Originals Slots & Casino Games Online"
      infoContent={stakeOriginalsInfo}
    />
  );
};

export default StakeOriginals;
