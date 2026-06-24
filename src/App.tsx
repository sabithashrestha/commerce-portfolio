import supabase from "../src/config/supabaseClient";

const App = () => {
  console.log("Supabase client:", supabase);

  return <div>App.... Lets try extracting data from supabase to react app</div>;
};

export default App;
