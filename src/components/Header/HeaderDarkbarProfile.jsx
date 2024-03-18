import DarkbarWrapperItem from "./HeaderDarkbarItem";

export default function DarkbarProfile() {
  return (
    <div className="icons">
      <div className="item-group">
        <DarkbarWrapperItem
          link="https://signin.ea.com/p/juno/login?execution=e206671001s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Finitref_replay%3Dfalse%26display%3DjunoWeb%2Flogin%26response_type%3Dcode%26redirect_uri%3Dhttps%3A%2F%2Fwww.ea.com%2Flogin_check%26locale%3Den_US%26client_id%3DEADOTCOM-WEB-SERVER"
          img="./src/Media/header/svg/signin-icon.svg"
          alt="A profile pic."
          text="Sign In"
        />
        <DarkbarWrapperItem
          link="https://signin.ea.com/p/juno/create?execution=e206671003s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Finitref_replay%3Dfalse%26display%3DjunoWeb%2Fcreate%26response_type%3Dcode%26redirect_uri%3Dhttps%3A%2F%2Fwww.ea.com%2Flogin_check%26locale%3Den_US%26client_id%3DEADOTCOM-WEB-SERVER"
          img="./src/Media/header/svg/register-icon.svg"
          alt="A profile pic with a plus sign."
          text="Create Account"
        />
      </div>
    </div>
  );
}
