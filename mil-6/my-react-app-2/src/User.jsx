export default function User({user}) {
    return(
        <div className="card">
            <h3>Name: {user.name}</h3>
            <p>Company: {user.company.name}</p>
            <p>city: {user.address.city}</p>
        </div>
    )
}