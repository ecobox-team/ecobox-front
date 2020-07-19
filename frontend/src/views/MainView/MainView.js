import React, { Component, Fragment } from "react";
import styled,{css} from "styled-components";
import imgVisual1 from "../../img/common/img_main_visual1.svg";
import imgVisual2 from "../../img/common/img_main_visual2.svg";


  /* style */
class MainView extends Component{
  render() {
    const Middle = styled.section`
      width: 100vw;
      height: 100vh;
      background-image: url(${imgVisual1})
      background-repeat: no-repeat;
      background-positon: left center;
      background-size: 
    `
    const Container = styled.div`
    `
    return (
      <Middle>
        <Container>
          <Content>
            <h2>EcoBox를 만든 이유</h2>
            <p>환경을 위협하는 일회용 사용을 줄이기 위해<br/>
              1000번 이상 재사용이 가능한 용기를 제안합니다.</p>
            <p>용기 사용 업체가 사용 현황을 체크하면서 관리하도록 하며<br/>
              소비자와 업체가 용기 사용을 적극 활용할 수 있도록<br/>
              배달 플랫폼과 연계하여 혜택과 서비스를 제공합니다.</p>
            <BtnBox>
              <BtnEnable>업체 관리 페이지</BtnEnable>
              <BtnEnable>EcoBox 관리자 페이지</BtnEnable>
            </BtnBox>
          </Content>
        </Container>
      </Middle>
    );
  }
}
export default MainView;
