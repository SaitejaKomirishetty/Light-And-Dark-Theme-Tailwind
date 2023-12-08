import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
} from "react-icons/fa";
import useDarkMode from "./../hooks/useDarkMode";

function TopNavigation() {
    return (
        <div className="top-navigation">
            <HashtagIcon />
            <Title />
            <TheamIcon />
            <Search />
            <BellIcon />
            <UserCircle />
        </div>
    );
}

const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;

const Title = () => <h5 className="title-text">tailwind-css</h5>;

const TheamIcon = () => {
    const [darkTheme, setDarkTheam] = useDarkMode();
    const handleMode = () => setDarkTheam(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <FaSun size="24" className="top-navigation-icon sun" />
            ) : (
                <FaMoon size="24" className="top-navigation-icon chand" />
            )}
        </span>
    );
};

const Search = () => (
    <div className="search">
        <input type="text" className="search-input" placeholder="Search..." />
        <FaSearch size="18" className="text-seconda my-auto" />
    </div>
);

const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;

const UserCircle = () => (
    <FaUserCircle size="20" className="top-navigation-icon" />
);

export default TopNavigation;
