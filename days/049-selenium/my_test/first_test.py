from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

# create a new Firefox session
driver = webdriver.Firefox()
# driver.implicitly_wait(1)
driver.maximize_window()

# accessing hynsyt
driver.get("http://127.0.0.1:4904")

# login to the website
login_button = driver.find_element_by_id("login_button")
login_button.click()

user_name = driver.find_element_by_id('email')
pass_word = driver.find_element_by_id('password')

user_name.send_keys('admin')
pass_word.send_keys('admin')
pass_word.submit()
sleep(2)

device_page = driver.find_element_by_link_text('Device')
device_page.click()
sleep(1)

add_new = driver.find_element_by_class_name('btn-info')
add_new.click()

name_field = driver.find_element_by_id('name')
mgmt_ip = driver.find_element_by_id('mgmt')

name_field.send_keys('a new device3')
mgmt_ip.send_keys('192.168.1.13')

add_button = driver.find_element_by_class_name('btn-primary')
add_button.click()
sleep(2)

### finding the details of a table ###

device_table = driver.find_element_by_id('deviceTable')
rows_in_device_table = device_table.find_elements_by_tag_name('tr')
print(f'The total number of rows in device table is {len(rows_in_device_table)}')





driver.close()
driver.quit()

