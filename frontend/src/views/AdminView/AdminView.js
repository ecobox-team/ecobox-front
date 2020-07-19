import React, { Component, Fragment } from "react";
import axios from "axios";
import styled,{css} from "styled-components";
import imgLogo from "../../img/common/ecobox_logo.svg"
import imgAlarm from "../../img/button/btn_alarm.svg"
import imgClose from "../../img/button/btn_close.svg"
import imgUser from "../../img/ico/ico_profile_admin.svg"
import imgGrayArrw from "../../img/button/btn_arrow_sel_gray.svg";
import imgWhtArrw from "../../img/button/btn_arrow_sel_white.svg";
import imgMinus from "../../img/button/btn_minus.svg"
import imgPlus from "../../img/button/btn_plus.svg"
import imgContainer1 from "../../img/common/img_container1.svg";
import imgContainer2 from "../../img/common/img_container2.svg";
import imgContainer3 from "../../img/common/img_container3.svg";
import imgContainer4 from "../../img/common/img_container4.svg";
import imgStatistics from "../../img/common/statistics_sample.svg";

  /* style */
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
    width: calc(50% - 12px);
  `;
  const Tit = styled.h2`
    font-size: 18px;
    font-weight: 700;

  `;
  const ManageArea = styled.div`
    position: relative;
    margin-top: 24px;
    padding-right: 180px;
  `;
  const ManageBox = styled.div`
    display: flex;
    padding: 26px;
    border-radius: 12px;
    background-color: #fff;

    & dl {
      position: relative;
      width: 50%
    }

    $ dl:first-child:after {
      content: "";
      position: absolute;
      right: 0;
      top: 12px;
      width: 2px;
      height: 80px;
      background-color: #F2F2F2;
    }

    & dt {
      font-size: 13px;
    }
    & dd{
      font-size: 24px;
      text-align: center;

      & b {
        font-size: 40px;
        font-weight: 700;
      }
    }
  `;
  const BtnBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 168px;
  `;
  const BtnEnable = styled.button`
    margin-top: ${props=> props.mgTop || "12px"};
    width: ${props=> props.width || "100%"};
    height:56px;
    line-height: 56px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    border-radius: 12px;
    background-color: ${props=> props.bgColor || "#A5A8A8"}
  `;
  const StatisticArea = styled.div`
  position: relative;
  margin-top: 24px;
  & img {
    display: block;
    width: 100%;
  }
`;
  const Selbox = styled.label`
    display: inline-block;
    position: ${props=> props.pos || "static"};
    top : ${props=> props.top || "auto"};
    right : ${props=> props.right || "auto"};

    & select {
      padding: 8px 20px;
      padding-right: 32px;
      border: none;
      border-radius: 16px;
      background: url(${imgGrayArrw});
      background-repeat: no-repeat;
      background-position: right 8px center;
      background-color: #fff;
      background-size: 16px;
      text-align: center;
    }
  `;
  const Text = styled.p`
    display: inline-block;
    width: ${props=>props.width || "auto"};
    font-size: ${props=>props.fSize || "12px"};
    font-weight: ${props=>props.fWeight || "400"};
    color: ${props=>props.color || "#828282"};
    text-align: ${props=>props.txtAgn || "left"};

    ${props=> props.amount && css`
      & em {
        display: inline-block;
        width: 12px;
        text-align: center;
      }
    `}

  `;
  const List = styled.ul`
    margin-top: 24px;
  `;
  const ListItem = styled.li`
    margin-top: 12px;
    width: 100%;
    padding: 8px 32px;
    border-radius: 12px;
    background-color: #fff;

  `;

  const PopWrapper = styled.div`
    display: ${props=> props.dim === "dim" ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
  `
  const PopArea = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 40px;
    min-width: 1000px;
    border-radius: 20px;
    background-color: #fff;
    transform: translate(-50%, -50%);
  `
  const PopContent = styled.div`
    padding: 40px;
  `
  const OrderList = styled.ul`
    margin: auto;
  `
  const OrderItem = styled.li`
    display: inline-block;
    position: relative;
    margin-left: ${props=> props.mgLeft || "12px"};
    padding: 164px 16px 36px;
    width: 200px;
    height: 316px;
    background-image: url(${props=> props.url});
    background-repeat: no-repeat;
    background-position: ${props=> props.bgPos || "center 16px"};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 6px 16px 0 rgba(0,0,0, 0.14);
  `
  const TextBox = styled.div`
    width: ${props=> props.width || "auto"};
    & span {
      display: block;
      font-size: ${props=> props.fSize1 || "16px"};
      font-weight: 700;
      text-align: ${props=> props.txtAgn1 || "center"};
    }
    & div {
      margin-top: ${props=> props.mgTop1 || "12px"};
    }
    & div p {
      position: relative;
      padding-left: 10px;
      line-height: 1.5em;
      color: ${props=> props.color2 || "#4f4f4f"};
      font-size: ${props=> props.fSize2 || "12px"};
      font-weight: ${props=> props.fWeight2 || "400"};
    }
    & div p:before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
    }
  `
  const BtnArea = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 36px;
    border-top: 1px solid #E0E0E0;
  `
  const BtnAccount = styled.button`
    display: inline-block;
    position: absolute;
    top: 0;
    left: ${props=> props.left || "auto"};
    right: ${props=> props.right || "auto"};
    width: 36px;
    height: 36px;
    background: #e0e0e0 url(${props=> props.url || imgMinus}) no-repeat center;
  `
  const InputAccount = styled.input`
    display: block;
    padding: 8px 16px;
    width: 100%;
    height: 36px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  `
  const Bottom = styled.div` margin-top: 56px; `
  const BtnOrder = styled.button`
    display: inline-block;
    position: absolute;
    bottom: 80px;
    right: 80px;
    padding: 0 16px;
    width: 240px;
    border-radius: 20px;
    height: 56px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    background-color: #5AB8AD;
    text-align: center;
  `
  const BtnCancel = styled.button`
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 32px;
    height: 32px;
    background: url(${imgClose}) no-repeat center;
    background-size: 100%;

  `

class AdminView extends Component {
  state = {
    id: 0,
    title: "치킨플러스 미들역점",
    level: "Premium",
    nickName: "치킨플러스",
    totalAmount: 500,
    currentAmount: 100,
    weeklyUseAmount: 500,
    weeklyGetAmount: 280, 
    isDim: false,
    containerA : 0,
    containerB : 0,
    containerC : 0,
    containerD : 0,
    stock: [],
  }

  async componentDidMount(){
    try{
      let store = await axios({
        url: "/api/restaurant/1",
        method: "get",
      })
      let stock = await axios ({
        url: "/api/stockRecords",
        method: "get",
      })
      let storeData = store.data.data[0];
      let stockRecords = stock.data.data;
      this.setState({
        id: storeData.id,
        title: storeData.name,
        level: storeData.plan_type,
        nickName: storeData.name,
        totalAmount: storeData.max_stock,
        currentAmount: storeData.current_stock,
        stock: stockRecords,
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

  handleInputChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if(value < 0 ) {
      alert("잘못 입력된 개수입니다.확인해주십시오.")
    } else {
      this.setState({ [name]: value })
    }
  }

  handlePopup = () => {
    const {isDim} = this.state;
    let dim = isDim === true ? false : true;
    this.setState({
      isDim: dim
    })
  }
  handleCntAMinus = () => {
    const { containerA } = this.state;
    let value = containerA < 1 ? 1 : containerA;
    this.setState({ containerA : value - 1 })
  }
  handleCntBMinus = () => {
    const { containerB } = this.state;
    let value = containerB < 1 ? 1 : containerB;
    this.setState({ containerB : value - 1 })
  }
  handleCntCMinus = () => {
    const { containerC } = this.state;
    let value = containerC < 1 ? 1 : containerC;
    this.setState({ containerC : value - 1 })
  }
  handleCntDMinus = () => {
    const { containerD } = this.state;
    let value = containerD < 1 ? 1 : containerD;
    this.setState({ containerD : value - 1 })
  }
  handleCntAPlus = () => {
    const { containerA } = this.state;
    let value = containerA < 1 ? 0 : containerA;
    this.setState({ containerA : value + 1 })
  }
  handleCntBPlus = () => {
    const { containerB } = this.state;
    let value = containerB < 1 ? 0 : containerB;
    this.setState({ containerB : value + 1 })
  }
  handleCntCPlus = () => {
    const { containerC } = this.state;
    let value = containerC < 1 ? 0 : containerC;
    this.setState({ containerC : value + 1 })
  }
  handleCntDPlus = () => {
    const { containerD } = this.state;
    let value = containerD === 0 ? 0 : containerD;
    this.setState({ containerD : value + 1 })
  }

  handleOrder = async() => {
    const { 
      id,
      containerA,
      containerB,
      containerC,
      containerD
    } = this.state;
    try{
      await axios({
        url: "/api/order",
        method: "post",
        data: {
          restaurant_id: id,
          status: 0,
          type: 0,
          container_type1_amount: parseInt(containerA),
          container_type2_amount: parseInt(containerB),
          container_type3_amount: parseInt(containerC),
          container_type4_amount: parseInt(containerD),
        }
      })
      this.handlePopup();
      alert("주문이 완료 되었습니다.")
    }catch(err){
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
      title,
      level,
      nickName,
      totalAmount,
      currentAmount,
      weeklyUseAmount,
      weeklyGetAmount,
      isDim,
      containerA,
      containerB,
      containerC,
      containerD,
      stock,
    } = this.state;
    const {
      handlePopup,
      handleInputChange,
      handleOrder,
    } = this;
    return (
      <Fragment>
        <Header>
          <Logo>EB</Logo>
          <span>{title}
            <b>
            {
              level === 0 ? "BASIC" :
              level === 1 ? "PREMIUM":"VIP"  
            }
            </b>
          </span>
          <SideBar>
            <BtnSide alarm></BtnSide>
            <BtnSide mine>{nickName}</BtnSide>
          </SideBar>
        </Header>
        <Middle id="middle">
          <Container>
            <Article mgLeft="0">
              <Tit>내 용기 관리</Tit>
              <ManageArea>
                <ManageBox>
                  <dl>
                    <dt>최대 보유 가능 용기수</dt>
                    <dd><b>{totalAmount}</b>개</dd>
                  </dl>
                  <dl>
                    <dt>현재 재고수</dt>
                    <dd><b>{currentAmount}</b>개</dd>
                  </dl>
                </ManageBox>
                <BtnBox>
                  <BtnEnable 
                    mgTop="0px" bgColor="#5AB8AD"
                    onClick={()=> handlePopup()}
                  >재주문</BtnEnable>
                  <BtnEnable>교환신청</BtnEnable>
                </BtnBox>
              </ManageArea>
              <StatisticArea>
                <img src={imgStatistics} alt="Sample" />
              </StatisticArea>
            </Article>
            <Article>
              <Tit>지난 용기 재고 내역</Tit>
              <Selbox pos="absolute" right="0"  top="0">
                <select>
                  <option value="ALL">전체</option>
                </select>
              </Selbox>
              <List>
                {stock.map((item, index)=>(
                  <ListItem key={index}>
                    <Text width="25%">{item.createdAt}</Text>
                    <Text 
                      width="55%"
                      txtAgn={"center"}
                    >
                      {item.customer_address}
                    </Text>
                    <Text
                      amount 
                      width="10%"
                      color={item.type === "0" ? "#5AB8AD": "#F2994A"}
                      txtAgn={"center"}
                      fWeight="700"
                    >
                      <em>{item.type === "0" ? "-": "+"}</em>
                      {item.stock_change}
                    </Text>
                    <Text width="10%"
                      color={item.type === "0" ? "#5AB8AD": "#F2994A"}
                      txtAgn={"right"}
                      fWeight="700"
                    >
                      {item.type === "0" ? "사용": "수거"}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Article>
          </Container>
        </Middle>
        <PopWrapper dim={isDim === true ? "dim": ""}>
          <PopArea>
            <PopContent>
              <OrderList >
                <OrderItem mgLeft="0px" url={imgContainer1}>
                  <TextBox>
                    <span>타입 A</span>
                    <div>
                      <p>칸막이가 없는 사각용기</p>
                      <p>치킨, 덮밥 등 단일메뉴에 적합</p>
                    </div>
                  </TextBox>
                  <BtnArea>
                    <BtnAccount
                      type="button"
                      left="0"
                      onClick={()=> this.handleCntAMinus()}
                    />
                    <InputAccount
                      name="containerA"
                      value={containerA}
                      onChange={(e)=> handleInputChange(e)}
                    />
                    <BtnAccount
                      type="button"
                      right="0" 
                      url={imgPlus}
                      onClick={()=> this.handleCntAPlus()}
                    />
                  </BtnArea>
                </OrderItem>
                <OrderItem url={imgContainer2}>
                  <TextBox>
                    <span>타입 B</span>
                    <div>
                      <p>2개의 칸이 있는 사각용기</p>
                      <p>돈까스, 중국음식 등 사이드가 적은 메뉴에 적합</p>
                    </div>
                  </TextBox>
                  <BtnArea>
                  <BtnAccount
                      type="button"
                      left="0"
                      onClick={()=> this.handleCntBMinus()}
                    />
                    <InputAccount
                      name="containerB"
                      value={containerB}
                      onChange={(e)=> handleInputChange(e)}
                    />
                    <BtnAccount
                      type="button"
                      right="0" 
                      url={imgPlus}
                      onClick={()=> this.handleCntBPlus()}
                    />
                  </BtnArea>
                </OrderItem>
                <OrderItem url={imgContainer3}>
                  <TextBox>
                    <span>타입 C</span>
                    <div>
                      <p>3개의 칸이 있는 사각용기</p>
                      <p>족발, 분식 등 사이드가 많은 메뉴에 적합</p>
                    </div>
                  </TextBox>
                  <BtnArea>
                  <BtnAccount
                      type="button"
                      left="0"
                      onClick={()=> this.handleCntCMinus()}
                    />
                    <InputAccount
                      name="containerC"
                      value={containerC}
                      onChange={(e)=> handleInputChange(e)}
                    />
                    <BtnAccount
                      type="button"
                      right="0" 
                      url={imgPlus}
                      onClick={()=> this.handleCntCPlus()}
                    />
                  </BtnArea>
                </OrderItem>
                <OrderItem url={imgContainer4} bgPos={"center 56px"} >
                  <TextBox>
                    <span>타입 D</span>
                    <div>
                      <p>칸막이가 없는 밀폐 원형용기</p>
                      <p>찌개, 냉면 등 국물요리 및 면요리에 적합</p>
                    </div>
                  </TextBox>
                  <BtnArea>
                    <BtnAccount
                      type="button"
                      left="0"
                      onClick={()=> this.handleCntDMinus()}
                    />
                    <InputAccount
                      name="containerD"
                      value={containerD}
                      onChange={(e)=> handleInputChange(e)}
                    />
                    <BtnAccount
                      type="button"
                      right="0" 
                      url={imgPlus}
                      onClick={()=> this.handleCntDPlus()}
                    />
                  </BtnArea>
                </OrderItem>
              </OrderList>
              <Bottom>
                <TextBox width="70%" txtAgn1="left" color2="#828282">
                  <span>유의사항</span><div>
                    <p>재주문은 현재 재고가 최대 보유 가능 용기수의 50%보다 적게 남아있을 때 요청 가능합니다.</p>
                    <p><b>가입하신 플랜의 재고 한도-현재 재고수</b>를 초과하여 재주문을 요청하실 수 없습니다.</p>
                    <p>주문하신 용기는 수도권 지역은 익일, 일부 도서산간지역은 2일 이내에 배송됩니다.</p>
                  </div>
                  
                </TextBox>
                <BtnOrder
                  type="button"
                  onClick={()=>handleOrder()}
                >
                  총 {parseInt(containerA)+parseInt(containerB)+parseInt(containerC)+parseInt(containerD)}개 재주문 요청
                </BtnOrder>
              </Bottom>  
            </PopContent>
            <BtnCancel 
              type="button"
              onClick={handlePopup}
            />
          </PopArea>
        </PopWrapper>
      </Fragment>
    );
  }
}
export default AdminView;
