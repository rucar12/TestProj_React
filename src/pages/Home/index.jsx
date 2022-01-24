import React, {Component} from "react";
import './Home.scss';
import {Dialogs, Message} from "../../components";
import {
    ContactsOutlined, EyeInvisibleOutlined,
    FormOutlined,
    HomeOutlined,
    LogoutOutlined, PhoneOutlined,
    SendOutlined, SettingOutlined,
    SmileOutlined, UserOutlined
} from "@ant-design/icons";
import { Menu, Button } from 'antd';
import {MenuUnfoldOutlined,ArrowLeftOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import {useState} from "react";
import classNames from 'classnames';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const SidebarLeft=styled.div`
  background: white;
  width: 270px;
  height: 27vh;
  position: fixed;
  top: 5vh;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
const SidebarRight=styled.div`
  background: white;
  width: 180px;
  height: 20vh;
  position: fixed;
  top: 5vh;
  right: ${({ sidebar_2 }) => (sidebar_2 ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
const StyledLink=styled(Link)`
    text-decoration: none;
    color: black;
    &:hover{
      color: black;
    }
`;


const { Search } = Input;
const { SubMenu } = Menu;

const Home = () => {
    const [ sidebar,setSidebar] = useState(false);
    const [ sidebar_2,setSidebar_2] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const showSidebar_2 = () => setSidebar_2(!sidebar_2);

    return(
        <div className='home'>
            <div className="chat">
                <div className="chat__dialogs">
                    <div className="chat__dialogs__header">
                        <div className={classNames('chat__dialogs__header__item', 'chat__dialogs__header__item-menu') }>

                            <MenuUnfoldOutlined  onClick={showSidebar}  />
                            <SidebarLeft sidebar={sidebar}>
                                <div className="menu__item">
                                    <div className="menu__item-icon">
                                        <HomeOutlined />
                                    </div>
                                    <div className="menu__item-name">
                                        <StyledLink to='/my_account'> My account</StyledLink>
                                    </div>
                                </div>
                                <div className="menu__item">
                                    <div className="menu__item-icon">
                                        <ContactsOutlined />
                                    </div>
                                    <div className="menu__item-name">
                                        <StyledLink  to='/contacts'>Contacts</StyledLink>
                                    </div>
                                </div>
                                <div className="menu__item">
                                    <div className="menu__item-icon">
                                        <SettingOutlined />
                                    </div>
                                    <div className="menu__item-name">
                                        <StyledLink to='/settings'>Settings</StyledLink>
                                    </div>
                                </div>
                                <div className="menu__item">
                                    <div className="menu__item-icon">
                                        <LogoutOutlined />
                                    </div>
                                    <div className="menu__item-name">
                                        <StyledLink to='/'>Exit</StyledLink>
                                    </div>
                                </div>

                            </SidebarLeft>
                        </div>
                        <div className="chat__dialogs__header__item">
                            <span>Dialogue list</span>
                        </div>
                        <div className={classNames("chat__dialogs__header__item", 'chat__dialogs__header__item-edit')}>
                            <FormOutlined  />
                        </div>

                    </div>

                    <div id="chat__dialogs__search">
                        <Space width="300px" direction="vertical">
                            <Search size="medium"  placeholder="Search contact..."  style={{ width: 330 }} />
                        </Space>

                    </div>

                    <div  className="chat__dialogs__list">
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />

                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                        <Dialogs
                            user='Ivan Petrov'
                            text={'Hello, my name is Ivan sfdfsdfas'}
                            avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'}
                            date="Fri Jan 21 2022 16:58:18"
                        />
                    </div>
                </div>
                <div className="chat__messages">
                    <div className="chat__messages__header">
                        <div className="chat__messages__header__item-back" >
                            <ArrowLeftOutlined />
                        </div>
                        <div className="chat__messages__header__item">
                            First name Last name
                        </div>
                        <div className="chat__messages__header__item-more">
                            <EllipsisOutlined onClick={showSidebar_2} />
                            <SidebarRight  sidebar_2={sidebar_2}>
                                <div className="chat__messages__header__menu">
                                    <div className="chat__messages__header__menu-item">
                                        <UserOutlined  />
                                        <StyledLink to={'/home'}>Check page</StyledLink>
                                    </div>
                                    <div className="chat__messages__header__menu-item">
                                        <PhoneOutlined />
                                        <StyledLink to={'/home'}>Call up</StyledLink>
                                    </div>
                                    <div className="chat__messages__header__menu-item">
                                        <EyeInvisibleOutlined />
                                        <StyledLink to={'/home'}>Block user</StyledLink>
                                    </div>
                                </div>

                            </SidebarRight>
                        </div>
                    </div>
                    <div className="chat__messages__content">
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="bla bla fsdgdfdgsfafdgsfdhdfsg fsgfgdhgds rsggsdaf fdsfasd fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://habrastorage.org/storage2/d36/922/412/d36922412b65ad20413ac591db392e09.png'
                            text="bla bdsfadsdf"
                            date="Fri Jan 21 2022 16:59:18"
                            itsMe={true}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                        avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                        text="blas rsggsdaf fds fsdsdf"
                        date="Fri Jan 21 2022 16:58:18"
                        itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                        <Message
                            avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/500px-NewTux.svg.png'
                            text="blas rsggsdaf fds fsdsdf"
                            date="Fri Jan 21 2022 16:58:18"
                            itsMe={false}/>
                    </div>
                    <div className="chat__messages__input">
                        <div className="chat__messages__input-smile">
                         <SmileOutlined />
                        </div>
                        <div className="chat__messages__input-item">
                            <Input placeholder={'Write a new message...'} size={'large'} />
                        </div>
                        <div className="chat__messages__input-action">
                            <SendOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default Home;