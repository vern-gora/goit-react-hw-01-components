import user from './DataJSON/user.json';
import data from './DataJSON/data.json';

import Profile from './Profile';
import Statistics from './Statistics';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};

export default App;
