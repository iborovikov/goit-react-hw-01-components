import user from './Data/user.json';
import statisticalData from './Data/statistical-data.json'
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import Container from './components/Container/Container'

const App = () => (
  <Container>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </Container>
);

export default App;
