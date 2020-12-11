function generateContactTitle() {
  let titleDiv = document.createElement('div');
  titleDiv.classList.add("contact-title");

  let contactTitle = document.createElement('h1');
  contactTitle.textContent = "Contact";
  titleDiv.appendChild(contactTitle);

  return titleDiv;
}

function generateContactInfo() {
  let contactInfo = document.createElement('div');
  contactInfo.classList.add("contact-info");

  let field1 = generateContactField("Telephone Number:", "943-482-0982");
  let field2 = generateContactField("Address:", "Wuhan, China");
  field1.push(...field2);

  for (let item of field1) {
    contactInfo.append(item);
  }

  return contactInfo;
}

function generateContactField(field, info) {
  let fieldName = document.createElement('div');
  fieldName.classList.add("info-description");
  fieldName.textContent = field; 

  let fieldInfo = document.createElement('div');
  fieldInfo.classList.add("info");
  fieldInfo.textContent = info; 

  return [fieldName, fieldInfo];
}

function generateContact() {
  let main = document.getElementById("main");

  let contactTitle = generateContactTitle();
  main.appendChild(contactTitle);

  let contactInfo = generateContactInfo();
  main.appendChild(contactInfo);

}

export default generateContact;
