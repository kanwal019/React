import Button from "./Button";

export default function FormAddFriend() {
    return (
        <form className="form-add-friend">
            <label>👤 Name</label>
            <input type="text" />
            <label>📷 Image URL</label>
            <input type="text" />
            <Button onClick={() => console.log("Adding new friend")}>Add</Button>
        </form>
    );
}
