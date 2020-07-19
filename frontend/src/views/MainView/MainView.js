import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgVisual1 from "../../img/common/img_main_visual1.png";

/* style */


class MainView extends Component{
  render() {
    const Middle = styled.section`
      padding-left: 445px;
      width: 100vw;
      height: 100vh;
      background-image: url(${imgVisual1});
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 445px;

    `
    const Container = styled.div`
      padding-top: 150px;
    `
    const Content = styled.div`
      margin: auto;
      width: 500px;

      & h2 {
        font-size: 34px;
        font-weight: 700;
      }

      & div p {
        margin-top: 32px;
        font-size: 16px;
      }
    `
    const BtnBox = styled.div`
      margin-top: 32px;
    `
    const BtnEnable = styled.button`
      display: inline-block;
      margin-left: ${props=> props.mgLeft || "16px"};
      width: 240px;
      height: 56px;
      line-height: 56px;
      border-radius: 12px;
      overflow: hidden;
      & a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        background-color: ${props=> props.bgColor || "#BDBDBD"};
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    `

    return (
      <Middle>
        <Container>
          <Content>
            <h2>EcoBox를 만든 이유</h2>
            <div>
              <p>환경을 위협하는 일회용 사용을 줄이기 위해<br/>
                1000번 이상 재사용이 가능한 용기를 제안합니다.</p>
              <p>용기 사용 업체가 사용 현황을 체크하면서 관리하도록 하며<br/>
                소비자와 업체가 용기 사용을 적극 활용할 수 있도록<br/>
                배달 플랫폼과 연계하여 혜택과 서비스를 제공합니다.</p>
              </div>
            <BtnBox>
              <BtnEnable mgLeft="0px" bgColor="#5AB8AD">
                <Link to="/admin"> 업체 관리 페이지</Link>
              </BtnEnable>
              <BtnEnable>
                <Link to="/s_admin">EcoBox 관리자 페이지</Link>
              </BtnEnable>
            </BtnBox>
          </Content>
        </Container>
      </Middle>
    );
  }
}
export default MainView;
