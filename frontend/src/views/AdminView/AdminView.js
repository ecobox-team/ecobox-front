import React, { Component, Fragment } from "react";
import styled,{css} from "styled-components";

// import Alarm from "../../../components/Alarm";

class AdminView extends Component {
  state = {
    title: "치킨플러스 미들역점",
    level: "Premium",
    nickName: "치킨플러스",
    totalAmount: 500,
    currentAmount: 100,
    weeklyUseAmount: 500,
    weeklyGetAmount: 280,
    history: [{
      date: "2020.07.05 16:20",
      addr: "서울특별시 송파구 송파대로 570 26층",
      type: "ADD",
      amount: 1,
      action: "수거"
    },{
      date: "2020.07.05 16:20",
      addr: "서울특별시 송파구 송파대로 570 26층",
      type: "DELETE",
      amount: 1,
      action: "사용"
    },{
      date: "2020.07.05 16:20",
      addr: "서울특별시 송파구 송파대로 570 26층",
      type: "DELETE",
      amount: 1,
      action: "사용"
    },{
      date: "2020.07.05 16:20",
      addr: "서울특별시 송파구 송파대로 570 26층",
      type: "ADD",
      amount: 1,
      action: "수거"
    },{
      date: "2020.07.05 16:20",
      addr: "서울특별시 송파구 송파대로 570 26층",
      type: "DELETE",
      amount: 1,
      action: "사용"
    }]
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
      history,
     } = this.state;

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
      color: #5AB8AD;
      font-size: 40px;
      font-weight: 700;
      border-bottom-right-radius: 12px;
      background-color: #F2F2F2;
      text-align: center;
    `;
    const SideBar = styled.div`
      position: absolute;
      top: 0;
      right: 80px;
    `;
    const BtnSide = styled.button`
      display: inline-block;
      ${props => props.alarm && css`

      `}
      ${props => props.mine && css`
        
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
      width: 100%;
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
      width: 100%:
      padding: 16px 40px;
      padding-top: 64px;
      border-radius: 12px;
      background-color: #fff;
    `;
    const StatHeader = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      padding: 16px;
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
        text-align: center;
      }
    `;
    const StatGraph = styled.span``;
    const Graph = styled.ul``;
    const GraphItem = styled.li``;
    const Amount = styled.span``;
    const TextBox = styled.div``;
    const Text = styled.p`
      display: inline-block;
      width: ${props=>props.width || "auto"};
      font-size: ${props=>props.fSize || "12px"};
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

    return (
      <Fragment>
        <Header>
          <Logo>EB</Logo>
          <span>{title}
            <b>{level}</b>
          </span>
          <SideBar>
            <BtnSide></BtnSide>
            <BtnSide>{nickName}</BtnSide>
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
                  <BtnEnable mgTop="0px" bgColor="#5AB8AD">재주문</BtnEnable>
                  <BtnEnable>교환신청</BtnEnable>
                </BtnBox>
              </ManageArea>
              <StatisticArea>
                <StatHeader>
                  <dl>
                    <dt>금주 용기 사용 갯수</dt>
                    <dd><b>{weeklyUseAmount}</b>개</dd>
                  </dl>
                  <dl>
                    <dt>금주 용기 수거 갯수</dt>
                    <dd><b>{weeklyGetAmount}</b>개</dd>
                  </dl>
                  <Selbox>
                    <select>
                      <option value="WEEKLY">Weekly</option>
                    </select>
                    <span>2020.07.13 - 2020.07.19</span>
                  </Selbox>
                </StatHeader>
                <StatGraph>
                  <Graph>
                    <GraphItem>
                      <div>
                        <Amount>
                          <em></em>
                        </Amount>
                        <Amount>
                          <em></em>
                        </Amount>
                      </div>
                      <TextBox>
                        <Text>13</Text>
                        <Text>월</Text>
                      </TextBox>
                    </GraphItem>
                  </Graph>
                </StatGraph>
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
                {history.map((item, index)=>(
                  <ListItem key={index}>
                    <Text width="25%">{item.date}</Text>
                    <Text 
                      width="55%"
                      txtAgn={"center"}
                    >
                      {item.addr}
                    </Text>
                    <Text
                      amount 
                      width="10%"
                      color={item.type === "ADD" ? "#5AB8AD": "#F2994A"}
                      txtAgn={"center"}
                    >
                      <em>{item.type === "ADD" ? "+": "-"}</em>
                      {item.amount}
                    </Text>
                    <Text width="10%"
                      color={item.type === "ADD" ? "#5AB8AD": "#F2994A"}
                      txtAgn={"right"}
                    >
                      {item.action}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Article>
          </Container>
        </Middle>
      </Fragment>
    );
  }
}
export default AdminView;
