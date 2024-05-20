
export default async function ServerSide (){
    const users = await getUsers();

  return (
    <div style={{height:'100dvh', padding: '1rem'}}>
      <h1 style={{padding: '1rem 0rem'}}>User (Server Side Reanding)</h1>
      {users.data.users.map((user: any) => {
        return <li key={user.id}>{user.firstName}</li>;
      })}
    </div>
  );
};

async function getUsers() {
  const data = await (await fetch("https:/dummyjson.com/users")).json();
  return {
      data,
  };
};
