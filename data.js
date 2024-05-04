$(document).ready(function () {
  const navigationBar = $("#navigationBar").html();
  const staffList = $("#staffList").html();
  const storeList = $("#storeList").html();

  Mustache.parse(navigationBar);
  Mustache.parse(staffList);
  Mustache.parse(storeList);

  const topNav = Mustache.render(navigationBar, {
    item: [
      {
        name: "Home",
        link: "/index.html",
      },
      {
        name: "About Us",
        link: "/about.html",
      },
      {
        name: "Join Us",
        link: "/join.html",
      },
      {
        name: "Events",
        link: "/events.html",
      },
      {
        name: "Shop",
        link: "/shop.html",
      },
      {
        name: "Contact Us",
        link: "/contact.html",
      },
    ],
  });

  $("#render_navLinks").html(topNav);

  const data = Mustache.render(staffList, {
    staff: [
      { name: "Anthony Gilbert", position: "Head Coach" },
      { name: "Christopher Mullins", position: "Asst. Coach" },
      { name: "Jim Smith", position: "Event Coordinator" },
    ],
  });

  $("#render_staffList").html(data);

  const items = Mustache.render(storeList, {
    store: [
      {
        image:
          "https://academy.scene7.com/is/image/academy/21120760?$pdp-gallery-ng$",
        name: "ASICS Men's Matflex 7",
        price: "$60.00",
        cat: "shoes",
      },
      {
        image:
          "https://academy.scene7.com/is/image/academy/21120760?$pdp-gallery-ng$",
        name: "ASICS Men's Matflex 7",
        price: "$60.00",
        cat: "shoes",
      },
      {
        image:
          "https://academy.scene7.com/is/image/academy/21120760?$pdp-gallery-ng$",
        name: "ASICS Men's Matflex 7",
        price: "$60.00",
        cat: "shoes",
      },
      {
        image:
          "https://academy.scene7.com/is/image/academy/21120760?$pdp-gallery-ng$",
        name: "ASICS Men's Matflex 7",
        price: "$60.00",
        cat: "shoes",
      },
      {
        image:
          "https://academy.scene7.com/is/image/academy/21120760?$pdp-gallery-ng$",
        name: "ASICS Men's Matflex 7",
        price: "$60.00",
        cat: "shoes",
      },
      {
        image:
          "https://academy.scene7.com/is/image/academy/21120760?$pdp-gallery-ng$",
        name: "ASICS Men's Matflex 7",
        price: "$60.00",
        cat: "shoes",
      },
    ],
  });

  $("#render_storeList").html(items);
});
