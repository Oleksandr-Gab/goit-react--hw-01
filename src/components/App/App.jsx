import userData from "../../userData.json";
import friends from "../../friends.json"
import transactions from "../../transactions.json";

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";


export default function App() {
  return (
    <div>
      <Profile userData={userData}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
}
