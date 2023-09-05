<div align="center">
  <img src="https://github.com/Team-DumdiDumdi/Derm.D-client/assets/62326659/0192c4e3-34ed-4bcc-843a-2d175f95f0e2" width="20%" height="20%"/>
  <br />
  <h2>사용자의 피부질환 판별 및 정보 공유 웹 서비스</h2>
  <p> 사용자가 피부질환 사진을 찍어 업로드하면, <br/>
해당 질환의 종류를 확인하고 관련된 다른 사례 이미지와 질환 정보를 함께 제공합니다.<p/>
</div>
<br />

## 기능 목록
### 질환 판별

<img src="https://github.com/Team-Dowon/Dowon-FE/assets/62326659/88ee097f-6795-4859-9b7b-79bf7acd8920" width="700" height="500" />

- 사용자가 업로드한 질환의 이미지를 통해 상세한 분석을 실시합니다.
- 분석된 이미지를 기반으로, 가장 높은 일치율을 보이는 5개의 질환 이름과 그에 해당하는 예시 사진을 사용자에게 제공합니다.

<br/>

### 질환 상세

<img src="https://github.com/Team-Dowon/Dowon-FE/assets/62326659/2e5d90a7-4b3d-42bf-aa40-5c05fb9986e8" width="700" height="500" />

- 대표적인 피부 질환들을 리스트 형태로 사용자에게 제공합니다.
- 특정 질환을 선택하면, 해당 질환에 대한 상세 정보가 제공되는 페이지로 이동합니다.

<br/>

### 질환 질문

<img src="https://github.com/Team-Dowon/Dowon-FE/assets/62326659/2f90e935-44d2-4c4e-abef-b1a3d0b675f8" width="700" height="500" />

- 질환 상세 정보 페이지에서 "질문하기" 버튼을 클릭하면, 질문 작성 페이지로 이동합니다.
- 질문의 제목과 본문, 그리고 관련 이미지를 업로드하여 질문을 올릴 수 있습니다.
- 사용자 본인이 게시한 질문에 한해서 수정 및 삭제 기능을 사용할 수 있도록 구현하였습니다.

<br/>

### 질환 답변

<img src="https://github.com/Team-Dowon/Dowon-FE/assets/62326659/ecf377cf-0a28-47b4-a178-9c50edcb3273" width="700" height="500" />

- Q&A 페이지에서 특정 질문에 대한 답변을 작성할 수 있습니다.
- 질환 질문을 하는 방식과 동일 하게 해당 질문에 대한 답변의 제목과 본문, 그리고 관련 이미지를 업로드하여 답변을 올릴 수 있습니다.


<br/>

### 질환 아카이브

<img src="https://github.com/Team-Dowon/Dowon-FE/assets/62326659/356b7129-9268-419a-bfa2-09a0b0dc7afd" width="700" height="500" />

- 로그인 상태에서 질환 상세 페이지의 "스크랩하기" 버튼을 클릭하면, 해당 질환을 아카이브에 저장할 수 있습니다.
- 아카이브 페이지를 통해 저장한 질환을 확인하거나, 필요에 따라 스크랩을 취소 할 수 있습니다.

<br/>


## 개발환경 세팅
```bash
$ npm install
$ npm start
```  

## Architecture - frontend
![다운로드](https://user-images.githubusercontent.com/62326659/181936227-757ade3f-70b6-49cb-9140-a4a3a87288b4.png)


## 기술 스택
|   범위    | 스택 |
| ------- | ------ |
| 언어 | <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> |
| 메인 라이브러리 | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> |
| 기타 라이브러리 | <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"> |

## Contact Information  
|Name|나규태|
|:------:|:---:|
|Role|Frontend|
|Github|[@ncb6206](https://github.com/ncb6206)
