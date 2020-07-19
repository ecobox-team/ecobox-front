import React, { Component, Fragment } from "react";
import update from 'react-addons-update';
import axios from "axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import styled,{css} from "styled-components";
import imgLogo from "../../img/common/ecobox_logo.svg"
import imgAlarm from "../../img/button/btn_alarm.svg"
import imgUser from "../../img/ico/ico_profile_admin.svg"
import imgBtnSearch from "../../img/button/btn_search.svg"
import imgGrayArrw from "../../img/button/btn_arrow_sel_gray.svg";
import imgWhtArrw from "../../img/button/btn_arrow_sel_white.svg";


const Header=styled.header`
display: block;
position: relative;
width: 100%;
padding-left: 86px;
background-color: #5AB8AD;
height: 64px;
line-height: 64px;

& span {
  display: inline-block;
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 700;

  & b {
    margin-left: 8px;
    color: #FFF493;
    font-size: 14px;
    font-weight: 700
  }
}
`;
const Logo = styled.h1`
position: absolute;
left: 0;
top: 0;
width: 64px;
height: 64px;
color: transparent;
font-size: 0px;
background: #F2F2F2 url(${imgLogo}) no-repeat center 5px;
background-size: 56px;
border-bottom-right-radius: 12px;
background-color: #F2F2F2;
`;
const SideBar = styled.div`
position: absolute;
top: 0;
right: 80px;
`;
const BtnSide = styled.button`
display: inline-block;
${props => props.alarm && css`
  width: 24px;
  height: 24px;
  background: url(${imgAlarm}) no-repeat  center;
  vertical-align: middle;
`}
${props => props.mine && css`
  position: relative;
  margin-left: 16px;
  padding: 0 24px 0 32px;
  color: #fff;
  background: url(${imgWhtArrw}) no-repeat right center;
  background-size: 16px;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: -4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: url(${imgUser}) no-repeat center;
    background-size: 24px;
  }
`}
`;
const Middle = styled.section`
padding-left: 64px;
background-color: #5AB8AD;
`;
const Container = styled.div`
display: flex;
padding: 40px;
height: calc(100vh - 64px);
border-top-left-radius: 20px;
background-color: #F8F2EB;
`;
const Article = styled.article`
position: relative;
margin-left: ${props=> props.mgLeft || "32px"};
width: ${props=> props.width };
`;
const Tit = styled.h2`
font-size: 18px;
font-weight: 700;
`;
const Selbox = styled.label`
display: inline-block;
position: ${props=> props.pos || "static"};
top : ${props=> props.top || "auto"};
right : ${props=> props.right || "auto"};
left : ${props=> props.left || "auto"};

& select {
  padding: ${props=> props.pd || "8px 16px"};
  padding-right: 28px;
  border: none;
  border-radius: 16px;
  text-align: center;
  color: ${props=> props.color2 || "#4f4f4f" };
  font-size: ${props=> props.fSize2 || "12px"};
  font-weight: ${props=> props.fWeight2 || "400"};
  background: url(${imgGrayArrw});
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-color: ${props=> props.bgColor2 || "transparent"};
  background-size: 16px;
}
`;
const SearchBox = styled.div`
position: relative;
margin-top: 24px;
padding: 16px;
padding-left: 112px;
background-color: #fff;
border: 1px solid #ddd;
border-radius: 12px;
`
const InputBox = styled.div`
position: relative;
padding-right: 100px;
`
const Input = styled.input`
display: inline-block;
width: 100%;
`
const BtnBox = styled.div`
position: absolute;
right: 0;
top: -9px;

`
const BtnSearch = styled.button`
display: inline-block;
width: 32px; 
height: 32px;
background: url(${imgBtnSearch}) no-repeat center;
background-size: 16px;
`
const BtnAdd = styled.button`
position: relative;
margin-left: 8px;
width: 40px;
height: 28px;
border-radius: 12px;
background-color: #C4C4C4;

&:before {
  content: "+";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: #fff;
}
`
const StoreItem = styled.li`
position: relative;
margin-top: 12px;
padding: 12px;
border-radius: 8px;
background-color: #fff;
`

const StoreText = styled.p`
display: inline-block;
width: ${props=>props.width || "auto"};
font-size: ${props=>props.fSize || "12px"};
font-weight: ${props=>props.fWeight || "400"};
color: ${props=>props.color || "#828282"};
text-align: ${props=>props.txtAgn || "left"};

${props=> props.addr && css`
  display: block;
  margin-top: 4px
`}
${props=> props.level && css`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`}
`;
const ListItem = styled.li`
position: relative;
margin-top: 12px;
width: 100%;
padding: 12px 16px;
border-radius: 6px;
background-color: ${props=> props.bgColor1 || "#fff"};
overflow: hidden;

&:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
  background-color: ${props=> props.bgColor2 || "#5AB8AD"};
}
`
const ListText = styled.p`
display: inline-block;
width: ${props=>props.width || "auto"};
font-size: ${props=>props.fSize || "12px"};
font-weight: ${props=>props.fWeight || "400"};
color: ${props=>props.color || "#828282"};
text-align: ${props=>props.txtAgn || "left"};

${props=> props.account && css`
  & span {
    display: inline-block;
    margin-right: 12px;
  }
  & span em { 
    display: inline-block;
    margin-right: ${props=> props.mgRight || "8px"};
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background-color: ${props=>props.bgColor || "#5AB8AD"};
    border-radius: 50%;
  }
`}
`
const Scroll = styled.div`
  height: ${props=> props.height};
  margin-top: ${props=> props.mgTop || "0px"}
`

class SuperAdminView extends Component {
  state = {
    storeArr: [],
    orderArr: [],
  }

  async componentDidMount(){
    try{
      let stores = await axios({
        url: "/api/restaurants",
        method: "get",
      }) 
      let order = await axios({
        url: "/api/orders",
        method: "get",
      })
      this.setState({
        storeArr: stores.data.data,
        orderArr: order.data.data,
      })
    } catch(err){
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        alert(err.response.data.message);
      } else if (err.request) {
          console.log(err.request);
      } else {
          console.log('Error', err.message);
      }
    }
  }

  handleSelectChange = async (e, index, id, storeId) => {
    const { orderArr } = this.state;
    let value = e.target.value;
    let sendData = value === "PENDING" ? 0 : 1;
    let amount = 
      orderArr[index].container_type1_amount + orderArr[index].container_type2_amount +
      orderArr[index].container_type3_amount + orderArr[index].container_type4_amount
      try{
        if(value === "SEND"){
          let store = await axios({
            url: "/api/restaurant/"+storeId,
            method: "get",
          })
          let current_stock = store.data.data[0].current_stock;
          await axios({
            url: "/api/restaurant",
            method: "put",
            data: { 
              id: storeId,
              current_stock: current_stock + amount,
            }
          })
        }
        await axios({
          url: "/api/order",
          method: "put",
          data: { 
            id: id,
            status: sendData 
          }
        })
        
        this.setState({
          orderArr: update (
              this.state.orderArr,
              { [index] : { status: {$set: value} } }
          )        
        });
        let order = await axios({
          url: "/api/orders",
          method: "get",
        })
        this.setState({
          orderArr: order.data.data,    
        });
      } catch(err){
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          alert(err.response.data.message);
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.log('Error', err.message);
        }
      }
  } 

  render() {
    const { 
      storeArr,
      orderArr,
     } = this.state;

    /* style */

    return (
      <Fragment>
        <Header>
          <Logo>EB</Logo>
          <span>통합 관리자 페이지</span>
          <SideBar>
            <BtnSide alarm></BtnSide>
            <BtnSide mine>관리자 님</BtnSide>
          </SideBar>
        </Header>
        <Middle id="middle">
          <Container>
            <Article mgLeft="0" width="calc(30% - 12px)">
              <Tit>제휴업체 현황</Tit>
              <SearchBox>
                <Selbox 
                  pos="absolute" 
                  left="0"  
                  top="8px"
                >
                  <select>
                    <option value="ALL">모든 구독 업체</option>
                  </select>
                </Selbox>
                <InputBox>
                  <Input type="text" />
                  <BtnBox>
                    <BtnSearch />
                    <BtnAdd />
                  </BtnBox>
                </InputBox>
              </SearchBox>
              <Scroll height="calc(100vh - 202px)">
                <PerfectScrollbar>
                  <ul>
                    {storeArr.map((item, index)=>(
                      <StoreItem key={index}>
                        <StoreText 
                          color="#666"
                          fSize="16px"
                          fWeight="700"
                        >
                          {item.name}
                        </StoreText>
                        <StoreText
                          fSize="11px"
                          color="#828282"
                        >{item.food_type}</StoreText>
                        <StoreText
                          addr
                          color="#828282"
                          width="100%"
                          fSize="11px"
                        >
                          {item.address}
                        </StoreText>
                        <StoreText
                          level
                          color={ 
                            item.plan_type === 0 ? "#5AB8AD" :
                            item.plan_type === 1 ? "#8FA4BF":"#F2C94C"                      
                          }
                          fSize="16px"
                          fWeight="700"
                        >
                          { item.plan_type === 0 ? "BASIC" :
                            item.plan_type === 1 ? "PREMIUM":"VIP"                      
                          } 
                        </StoreText>
                      </StoreItem>
                    ))}
                  </ul>
                </PerfectScrollbar>
              </Scroll>
            </Article>
            <Article width="calc(70% - 12px)">
              <Tit>재주문 요청 현황</Tit>
              <Selbox 
                pos="absolute" 
                right="0" 
                top="0"
                bgColor2="#fff"
              >
                <select>
                  <option value="ALL">전체</option>
                </select>
              </Selbox>
              <Scroll height="calc(100vh - 202px)" mgTop="24px">
                <PerfectScrollbar>
                  <ul>
                    {orderArr.map((item, index)=>(
                      <ListItem 
                        key={index}
                        bgColor1={item.status === 1 ? "#e0e0e0" : "#fff"}
                        bgColor2={
                          item.status === 1 ? "#999" :
                          item.type === 0 ? "#5AB8AD" : "#8FA4BF"
                        }
                      >
                        <ListText 
                          width="12%"
                          fWeight="700"
                          color={
                            item.status === 1 ? "#999" :
                            item.type === 0 ? "#5AB8AD" : "#8FA4BF"
                          }
                        >{item.type === 0 ? "재주문 요청" : "교환 요청"}</ListText>
                        <ListText 
                          width="15%"
                          fSize="11px"
                        >
                          {item.createdAt}
                        </ListText>
                        <ListText
                          width="19%"
                          txtAgn={"center"}
                        >
                          {item.name}
                        </ListText>
                        <ListText
                          account 
                          width="40%"
                          bgColor={
                            item.status === 1 ? "#999" :
                            item.type === 0 ? "#5AB8AD": "#8FA4BF"
                          }
                        >
                          {item.container_type1_amount > 0 && (
                            <span> 
                              <em>A</em>
                              {item.container_type1_amount}개
                            </span>
                          )}
                          {item.container_type2_amount > 0 && (
                            <span> 
                              <em>B</em>
                              {item.container_type2_amount}개
                            </span>
                          )}
                          {item.container_type3_amount > 0 && (
                            <span> 
                              <em>C</em>
                              {item.container_type3_amount}개
                            </span>
                          )}
                          {item.container_type4_amount > 0 && (
                            <span> 
                              <em>D</em>
                              {item.container_type4_amount}개
                            </span>
                          )}
                        </ListText>
                        <Selbox
                          pd="0 8px"
                          fWeight2="700"
                          color2={
                            item.status === 1 ? "#999": 
                            item.type === 0 ? "#5AB8AD": "#8FA4BF"
                          }
                        >
                          <select
                            value={item.status === 0 ? "PENDING": "SEND"}
                            onChange={(e)=>this.handleSelectChange(e, index, item.id, item.restaurant_id)}
                          >
                            <option value={"PENDING"}>대기 상태</option>
                            <option value={"SEND"}>발주 완료</option>
                          </select>
                        </Selbox>
                      </ListItem>
                    ))}
                  </ul>
                </PerfectScrollbar>
              </Scroll>
            </Article>
          </Container>
        </Middle>
      </Fragment>
    );
  }
}
export default SuperAdminView;
