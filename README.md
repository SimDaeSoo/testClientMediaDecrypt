# Test Client Media Decrypt

For Desktop

http://video-client-decrypt-sample.s3-website.ap-northeast-2.amazonaws.com/  

클라에서 Video를 받는 경우를 막기위해  
잘 모르는 사람은 Video를 다운받을 수 없도록 Client단에서 decrypt한다.  
다만 Key값 또한 그냥 Client에 넣어둘 것이므로, 컴퓨터좀 아는 사람은 까서 영상에 해당하는 파일 받고, Decrypt를 하면 볼 수 있다.  

아주 영상 보안에 이슈가 있는 경우가 아니라면.  
그 정도로 했는데 가져가는것이 맞다.  

보안적으로 중요한 것 이였다면 DRM을 사용한다. 이것은 임시방편.

영상을 받아보시면 코드를 따라가서 어떻게 decrypt해야하는지 아는것이 아닌경우, 돌려볼 수 없다.  
