import "./maillist.css"

export default function MailList() {
    return (
        <div className="mailList">
            <h1 className="mailTitle">Want to get new offers in your mailbox?</h1>
            <div className="mailInput">
                <input type="text" placeholder="Your Email" />
                <button>Register</button>
            </div>
        </div>
    )
}
