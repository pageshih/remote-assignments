const NavItem = (props) => (
    <li><a href="#">{props.item}</a></li>
);
const Nav = (props) => (
    <nav>
        <div className="container flex-box space-between">
            <h1>Website Title / Logo</h1>
            <ul className="flex-box menu">
                {
                    props.navItem.map((item, index)=><NavItem key={index} item={item}/>)
                }
            </ul>
            <img src="./images/1276857_bar_humburger_menu_misc_icon.svg" 
                alt="hamburger-menu" 
                className="hamburger" 
                id="burgerBtn"
                onClick={props.showSideMenu}
                />
        </div>
    </nav>
);
const SideMenu = (props) => (
    <nav className="side" style={props.isSideMenu}>
        <ul className="side-menu">
            {
                props.navItem.map((item, index)=><NavItem key={index} item={item}/>)
            }
        </ul>
        <div className="close" id="closeBtn" onClick={props.hideSideMenu}>X</div>
    </nav>
);
const Header = () => (
    <header>
        <h2>Welcome Message</h2>
    </header>
);

const ContentBox = (props) => (
    <li>{props.title}</li>
);

const ContentBoxList = (props) => (
    <ul className="content-box">
        {
            props.contents.map((item, index) => <ContentBox key={index} title={item}/>)
        }
        
    </ul>
);

const Main = (props) => (
    <main>
        <section className="container">
            <h3>Section Title</h3>
                <ContentBoxList contents={props.contents}/>
            <button type="button" id="showMoreBtn" onClick={props.loadMore}>Call to Action</button>
        </section>
    </main>
);
class App extends React.Component{
    state = {
        contents:[
            'content 1',
            'content 2',
            'content 3',
            'content 4'
        ],
        navItem:[
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4'
        ],
        isSideMenu: {display: 'none'}
    };

    showSideMenu = () => {
        this.setState(
            {
                ...this.state,
                isSideMenu: {display: 'flex'}
            }
        );
    };
    hideSideMenu = () => {
        this.setState(
            {
                ...this.state,
                isSideMenu: {display: 'none'}
            }
        );
    };

    loadMore = () => {
        this.setState(
            {
                contents:[
                    ...this.state.contents,
                    'content 5',
                    'content 6',
                    'content 7',
                    'content 8'
                ]
            }
        );
    };
 
    render(){
        return(
            <div>
                 <Nav navItem={this.state.navItem} 
                    showSideMenu={this.showSideMenu}/>
                 <SideMenu navItem={this.state.navItem} 
                    isSideMenu={this.state.isSideMenu} 
                    hideSideMenu={this.hideSideMenu}/>
                 <Header />
                 <Main contents={this.state.contents} 
                        loadMore={this.loadMore}
                        initialContent={this.initialContent}/>
             </div>
         )
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );