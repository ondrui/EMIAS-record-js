## short script for mos.ru API call

Задача скрипта: с настраиваемой периодичностью делать запрос к API mos.ru, чтобы проверить возможность записи к нужному врачу. Ответ выводится в ввиде JSON объекта, который затем парсится.
Используется GET запрос с параметрами. Через POST запросы можно проводить операции записи к врачу, удаление записи.

Также можно отслеживать наличие билетов на поезд через API РДЖ.

Используется библиотека axios, чтобы исследовать запросы к API использовались chrome dev tools & postman
