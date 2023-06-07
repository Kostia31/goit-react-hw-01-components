import Profile from './profile/Profile';
import Section from './sectionStatistics/Section';
import StatisticsList from './statisticsList/StatisticsList';
import FriendList from './FriendList/FriendList';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section title={'Upload stats'}>
        <StatisticsList data={data} />
      </Section>
      <FriendList friends={friends} />
    </div>
  );
};
