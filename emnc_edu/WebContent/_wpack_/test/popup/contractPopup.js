/*amd /test/popup/contractPopup.xml 7707 18802f3cdf446e002b2703273359b3c81aa5918557799765bf154acab7cdb866 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_contract'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'no',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'division',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'projectNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startDate',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDate',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:mfeSubmission'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.contractList = [{
  no: "1",
  contractNo: "C2026001",
  division: "신규",
  contractNm: "A사 공급계약",
  projectNm: "ERP 구축 프로젝트",
  startDate: "2026-01-01",
  endDate: "2026-12-31"
}, {
  no: "2",
  contractNo: "C2026002",
  division: "변경",
  contractNm: "B사 유지보수계약",
  projectNm: "시스템 유지보수",
  startDate: "2026-02-01",
  endDate: "2026-11-30"
}, {
  no: "3",
  contractNo: "C2026003",
  division: "신규",
  contractNm: "C사 개발계약",
  projectNm: "차세대 시스템",
  startDate: "2026-03-01",
  endDate: "2026-12-31"
}, {
  no: "4",
  contractNo: "C2026004",
  division: "연장",
  contractNm: "A사 유지보수계약",
  projectNm: "ERP 유지보수",
  startDate: "2026-04-01",
  endDate: "2027-03-31"
}, {
  no: "5",
  contractNo: "C2026005",
  division: "신규",
  contractNm: "D사 공급계약",
  projectNm: "물류 시스템",
  startDate: "2026-05-01",
  endDate: "2026-12-31"
}];
scwin.btn_search_onclick = function () {
  // 검색어 가져오기
  var searchNm = inp_contractNm.getValue();

  // JSON 데이터 검색
  var result = scwin.contractList.filter(function (item) {
    // 검색어가 없으면 전체 조회
    if (!searchNm) {
      return true;
    }

    // 계약명 포함 여부 확인
    return item.contractNm.indexOf(searchNm) > -1;
  });
  // DataList에 결과 바인딩
  dc_contract.setJSON(scwin.contractList);
};
scwin.rdo_division_onchange = function () {
  var division = $p.getComponentById("rdo_division").getValue();
  var result = scwin.contractList.filter(function (item) {
    if (!division || division === "ALL") {
      return true;
    }
    return item.division === division;
  });
  var dc = $p.getComponentById("dc_contract");
  dc.setJSON(result);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tbl ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'inp_contractNm',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'계약분류',style:'width: 150px;height: 23px;'}},{T:1,N:'xf:select1',A:{id:'rdo_division',selectedIndex:'-1',appearance:'full',style:'',cols:'',rows:'',ref:'','ev:onbeforeselect':'scwin.select11_onbeforeselect','ev:onchange':'scwin.rdo_division_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ALL'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'연장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'연장'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변경'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'변경'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'gvw',dataList:'data:dc_contract',focusMode:'row',id:'grd_contract',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 150px;',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'no',inputType:'text',removeBorderStyle:'false',value:'No',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'contractNo',inputType:'text',removeBorderStyle:'false',value:'계약번호',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'division',inputType:'text',removeBorderStyle:'false',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'contractNm',inputType:'text',removeBorderStyle:'false',value:'계약명',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'projectNm',inputType:'text',removeBorderStyle:'false',value:'프로젝트명',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'startDate',inputType:'text',removeBorderStyle:'false',value:'시작일자',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'endDate',inputType:'text',removeBorderStyle:'false',value:'종료일자',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'no',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'contractNo',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'division',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'contractNm',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'projectNm',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'startDate',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'endDate',inputType:'text',removeBorderStyle:'false',width:'70'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pglbox',id:''},E:[{T:1,N:'w2:pageList',A:{class:'pgl',displayButtonType:'display',displayFormat:'#',id:'pageList1',pageSize:'10',pagingType:'0',style:''}}]}]}]}]}]})