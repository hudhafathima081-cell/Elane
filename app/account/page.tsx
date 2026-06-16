export default function AccountPage() {
  return (

    <div className="min-h-screen bg-[#F8F4EE] p-20 text-black">

      <h1 className="text-6xl font-serif mb-10 text-black">
        Login / Account
      </h1 >

      <input
        type="email"
        placeholder="Email"
        className="border p-4 rounded-xl block mb-4 w-[400px] text-black"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-4 rounded-xl block w-[400px] text-black"
      />

    </div>

  );
}