import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  public masters2Collapsed = false;
  public adminCollapsed = false;
  public engineeringCollapsed = false;
  public masters1Collapsed = false;
  public salesCollapsed = false;
  public transactionCollapsed = false;  
  isShow = false;
  isPurchase = false;
  cust_show = false;
  shopOrderShow: boolean = true;


  //public transactionCollapsed = false;
  //isShow = true;
  // isPurchase = false;
  // cust_show = false;
  // isCollapsed = false;
  isHidden: boolean = true;
  isHiddenPurchase: boolean = true;
  isHiddencust_show: boolean = true;
  isHiddenGrin: boolean = true;
  isHiddenCustoService: boolean = true;
  isHiddenOpenDelService: boolean = true;
  isMaterialIssue: boolean = true;
  isPickList: boolean = true;
  isInvoiceList: boolean = true;
  isBtoInvoiceList: boolean = true;
  isHiddenScShop: boolean = true;
  isHiddenMR: boolean = true;
  isHiddenMTN: boolean = true;
  deliveryOrder: boolean = true;
  isHiddenBinning: boolean = true;
  isHiddenFinalOqc: boolean = true;
  
  constructor() { }

  ngOnInit() {
    this.isShow == false;
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }


  // salesToggleDisplay() {
  //   this.isShow = !this.isShow;
  // }

  // toggleDisplaypuchase(){
  //   this.isPurchase = !this.isPurchase
  // }
  
  // customerToggleDisplay() {
  //   this.cust_show = !this.cust_show;
  // }

  

  // toggleDisplay(){
  //   if( this.isHidden = !this.isHidden){
  //       if(this.isHidden===true){
  //         document.getElementById('saleOrders').style.color = '#555555'
  //       }
  //       else{
  //         document.getElementById('saleOrders').style.color = '#030974'
  //       }
  //   }
  //    if(this.isHiddencust_show===true){
  //     document.getElementById('saleOrders').style.color = '#555555'
  //   }
  //    if(this.isHiddenPurchase===true){
  //     document.getElementById('saleOrders').style.color = '#555555'
  //   }
  //   else{
  //     document.getElementById('saleOrders').style.color = '#030974'
  //   }
  // }
  shopToggleDisplay() {
    this.shopOrderShow = !this.shopOrderShow;
  }
  salesToggleDisplay() {
    // this.isShow = !this.isShow;
    this.isHidden = !this.isHidden;
    // if(this.isHidden===true){
    //   document.getElementById('saleOrders').style.color = 'black'
    // }
    // else{
    // document.getElementById('saleOrders').style.color = '#030974' ;
    // }
    // document.body.style.backgroundColor = 'red';
  }
  customerToggleDisplay() {
    // this.cust_show = !this.cust_show;
    this.isHiddencust_show = !this.isHiddencust_show;
    // document.getElementById('customerSalesOrder').style.color = '#030974' ;
  }
  toggleDisplaypuchase(){
    // this.isPurchase = !this.isPurchase
    this.isHiddenPurchase = !this.isHiddenPurchase;
    // document.getElementById('purchase').style.color = '#030974' ;
  }
  scroll(){
    debugger;
    window.scrollBy(0,9);
    // let ele = document.getElementById('master1');
    // ele.scrollBy(0,150); 
  }
  toggleDisplayGrin(){
    this.isHiddenGrin = !this.isHiddenGrin;
  }

  toggleDisplayCustoService(){
    this.isHiddenCustoService = !this.isHiddenCustoService;
  }

  toggleDisplayOpenDeliverService(){
    this.isHiddenOpenDelService = !this.isHiddenOpenDelService;
  }

  toggleDisplayMaterialIssue(){
    this.isMaterialIssue = !this.isMaterialIssue;
  }
  toggleDisplayPickList(){
    this.isPickList = !this.isPickList;
  }
  toggleDisplayInvoiceList(){
    this.isInvoiceList = !this.isInvoiceList;
  }
  toggleDisplayBtoInvoiceList(){
    this.isBtoInvoiceList = !this.isBtoInvoiceList;
  }
  toggleScShopOrderList() {
    this.isHiddenScShop = !this.isHiddenScShop;
  }
  togglematerialRequest() {
    this.isHiddenMR = !this.isHiddenMR;
  }
  togglematerialTransactionNote() {
    this.isHiddenMTN = !this.isHiddenMTN;
  }
  toggledeliveryOrder(){
    this.deliveryOrder = !this.deliveryOrder
  }
  toggleDisplayBinning(){
    this.isHiddenBinning = !this.isHiddenBinning
  }
  toggleDisplayFinalOqcList(){
    this.isHiddenFinalOqc = !this.isHiddenFinalOqc
  }
}
