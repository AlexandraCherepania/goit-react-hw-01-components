import user from '../users.json';
import data from '../components/Statistics/data'
import friends from "../components/Friends/friends.json"
import { ProfileUser } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendItem } from './Friends/FriendItem'



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

        <FriendItem friends={friends} />




    </div >);

}


