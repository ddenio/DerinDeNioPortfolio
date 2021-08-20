const form = document.getElementById("contact");

const formEvent = form.addEventListener("submit", (event) => {
	event.preventDefault();
    
    let mail =new FormData(form);

    sendMail(mail);
})


const sendMail = (mail) => {
	fetch("https://ddenio.github.io/DerinDeNioPortfolio/DerinDeNioPortfolio/index.html/send", {
		method: "post",
		body: mail,
	}).then((response) => {
		return response.json();
	})
};