import './Payment.css'
const Payment = () => {
  return (
    <>
    <div>

<header>
	<div class="container">
		<div class="left">
			<h3>BILLING ADDRESS</h3>
			<form>
				Full name
				<input type="text" name="" placeholder="Enter name"/>
				Email
				<input type="text" name="" placeholder="Enter email"/>

				Address
				<input type="text" name="" placeholder="Enter address"/>
				
				City
				<input type="text" name="" placeholder="Enter City"/>
				<div id="zip">
					<label>
						State
						<select>
							<option>Choose State..</option>
							<option>Telagana</option>
							<option>Andhra pradesh</option>
							<option>Goa</option>
							<option>karnataka</option>
							<option>kerala</option>
							<option>tamilnadu</option>
						</select>
					</label>
						<label>
						Zip code
						<input type="number" name="" placeholder="Zip code"/>
					</label>
				</div>
			</form>
		</div>
		<div class="right">
			<h3>PAYMENT</h3>
			<form>
				Accepted Card <br/>
				<img src="https://cdn1.sportngin.com/attachments/photo/3209-154281162/Visa-Mastercard-Logo_large.jpg" width="100"/>
				<img src="https://th.bing.com/th/id/R.ac8ade58b7abf5f5c48dbf032f21e8ff?rik=ioC%2bPoz3YeF6xQ&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297n1nru.png&ehk=%2b3LDEHNl76V00ZeLA99OgbjPG3MMU50w%2fDo9f%2bwfCCM%3d&risl=&pid=ImgRaw&r=0" width="50"/>
				<br/><br/>

				Credit card number
			<input type="text" name="" placeholder="Enter card number"/>
				
				Exp month
				<input type="text" name="" placeholder="Enter Month"/>
				<div id="zip">
					<label>
						Exp year
						<select>
							<option>Choose Year..</option>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
							<option>2025</option>
						</select>
					</label>
						<label>
						CVV
						<input type="number" name="" placeholder="CVV"/>
					</label>
				</div>
			</form>
			<input type="submit" name="" value="Proceed to Checkout" onClick={() => window.location.replace("/dashboard")}/>
		</div>
	</div>
</header>

    </div></>
  )
}

export default Payment