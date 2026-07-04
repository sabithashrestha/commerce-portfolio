import supabase from "../supabaseClient";

// connects to the supabase database and fetches all products from the "products" table
export async function getProducts() {
  const { data, error } = await supabase.from("products").select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
