import { useState } from "react";

function App() {
	const [email,setEmail] =useState("");
	console.log(email);
	const handleSubmit = (e)=>{
		e.preventDefault();
		fetch("http://127.0.0.1:8080/travel-yatri/v1/api/subscribe-for-updates",{method:"POST",
		body:JSON.stringify({
			email: email
		})})
		.then((response) => response.json())
		.then((data) => console.log(data));
	}
  return (
		<div className="min-h-screen flex flex-col text-slate-900">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
      <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcoming Yatris </h2>
      <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">InTo</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Travel Sahayatri</h1>

				<h3 className="text-3xl md:text-lg lg:text-2xl mb-8 max-w-fit mx-auto bg-cyan-50"> Brewing the travelling habits!</h3>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-slate-900 bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
        <form 
					onSubmit={handleSubmit}
					method="post" 
					id="revue-form"
					name="revue-form"
					target="">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							value={email}
							onChange={(e)=>setEmail(e.target.value)}
							className="text-2xl placeholder:text-white placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-red-700 bg-opacity-80 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-gray-400 md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="text-slate-100 text-2xl md:text-xl  italic">
					*By subscribing, we can be in touch with you.
					<p></p>Please visit our <a target="" href="#" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="" href="#" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>
				</div>

      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p className="mx-0 text-black text-2xl md:text-2xl bg-slate-300">Adhere the love & adventures! </p>
        
        <div className="flex -mx-6 text-cyan-50">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">About Us</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy Policy</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
        </div>
      </footer>
   </div>
  );
}

export default App;
