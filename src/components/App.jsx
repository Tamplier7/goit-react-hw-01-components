import ProfileCard from './Profile/ProfileCard/ProfileCard';
import StatsCard from './Stats/StatsCard/StatsCard';
import FriendList from './FriendList/FriendList/FriendList';
import TransactionsTable from './Transactions/TransactionsTable/TransactionsTable';

import userInfo from '../data/user.json';
import statsData from '../data/data.json';
import friendsInfo from '../data/friends.json';
import transactionsData from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <ProfileCard
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <StatsCard statsData={statsData} title="Some title" />
      <FriendList friends={friendsInfo} />
      <TransactionsTable transactions={transactionsData} />
    </div>
  );
};
