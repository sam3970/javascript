<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<title>JavaScript DOM Element Test </title>
</head>

<body>
  <strong>created by LeeSangKyu</strong>
	<h1>HTML 태그 이름을 이용한 JAVASCRIPT TEST</h1>
	<ul>
		<li>list 1</li>
		<li>list 2</li>
		<li>list 3</li>
		<li>list 4</li>
		<li>list 5</li>
	</ul>

	<script>
		var Item = document.getElementsByTagName("li");		// 모든 <li> 요소를 선택
		for (var i = 0; i < Item.length; i++) 
		{
			Item.item(i).style.color = "violet";	// 선택된 모든 요소의 텍스트 색상을 변경함.
		}
	</script>
	
</body>

</html>

