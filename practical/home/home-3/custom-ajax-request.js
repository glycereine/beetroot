//'use strict';

(function(){

	const GET_DATA_BTN = document.getElementById('get-data');
	const DATA_TABLE   = document.getElementById('data-table');
	const TABLE_INNER  = document.getElementById('table-inner');

	function getAjaxData(){

		let ajax =  new  XMLHttpRequest();

		// Тип запроса: сообщение и URL-адрес API
		ajax.open( 'GET' , 'https://jsonplaceholder.typicode.com/posts' , true );
		ajax.send();

		// Создаем событие для получения возврата.
		ajax.onreadystatechange  =  function () {

			// Если состояние равно 4, а http.status - 200, это связано с тем, что запрос выполнен.
			if ( ajax.readyState == 4  &&  ajax.status == 200 ) {

				let data =  ajax.responseText;

				let prepared_table_data = '';

				JSON.parse(data).forEach(function(item){
					prepared_table_data += `
						<tr>
							<td class="userid">${item.userId}</td>
							<td class="id">${item.id}</td>
							<td class="title">${item.title}</td>
							<td class="body">${item.body}</td>
						</tr>`;
				});

				// Вставляем сформированные данные в структуру DOM
				TABLE_INNER.innerHTML = prepared_table_data;

				// Удаляем блокировку кнопки
				GET_DATA_BTN.classList.remove('loading');

				// показывает таблицу пользователю после внедрения всех данных
				DATA_TABLE.classList.remove('hidden');

				// Возвращение Ajax
				//console.log ('data', typeof data);
			} else {
				console.log ( ajax.status + ': ' + ajax.statusText ); // пример вывода ошибки
			}
		}

	}


	// Обрабатывает нажатие на кнопку получения данных
	document.addEventListener('click', function(event){
		event.preventDefault();

		if ( event.target.id === 'get-data' ) {
			GET_DATA_BTN.classList.add('loading');
			getAjaxData();
		}


		// Обрабатывает нажатие на кнопку изменения сортировки
		if ( event.target.id === 'sort-by-userID' ||  event.target.id === 'sort-by-ID' ) {

			if ( [...DATA_TABLE.classList].includes('reversed') ) {
				DATA_TABLE.classList.remove('reversed');
			} else {
				DATA_TABLE.classList.add('reversed');
			}

		}

	});

})();
