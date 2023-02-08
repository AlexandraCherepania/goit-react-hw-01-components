import user from '../users.json';
import { ProfileUser } from './Profile/Profile'



export const App = () => {
    return (<div>
        <ProfileUser
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    </div >);

}


