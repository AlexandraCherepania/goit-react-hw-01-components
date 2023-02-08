import user from '../users.json';
import data from '../components/Statistics/data'
import friends from "../components/Friends/friends.json"
import transaction from "../components/Transaction/transaction.json"
import { ProfileUser } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendListItem } from './Friends/FriendListItem'
import { TransactionHistory } from './Transaction/TransactionHistory'



export const App = () => {
    return (<div style={{
        display: "flex",

        flexDirection: "column",
        gap: "15px"
    }}>

        <ProfileUser
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />


        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />

        <FriendListItem friends={friends} />

        <TransactionHistory items={transaction} />


    </div >);

}


