var LazyLoading = LazyLoading || {};

(function (LazyLoading) {

	LazyLoading.ViewPortHeight = LazyLoading.ViewPortHeight || {};
	LazyLoading.Context = LazyLoading.Context || {};
	LazyLoading.Web = LazyLoading.Web || {};
	LazyLoading.List = LazyLoading.List || {};
	LazyLoading.CamlQuery = LazyLoading.CamlQuery || {};
	LazyLoading.SpItems = LazyLoading.SpItems || {};
	LazyLoading.Position;
	LazyLoading.NextPagingInfo = LazyLoading.NextPagingInfo || {};
	LazyLoading.PreviousPagingInfo = LazyLoading.PreviousPagingInfo || {};
	LazyLoading.ListName = LazyLoading.ListName || {};
	LazyLoading.PageIndex = LazyLoading.PageIndex || {};
	LazyLoading.PageSize = LazyLoading.PageSize || {};
	LazyLoading.SiteUrl = LazyLoading.SiteUrl || {};	
	LazyLoading.ListEnumerator= LazyLoading.ListEnumerator|| {};	
	LazyLoading.Items = LazyLoading.Items || [];	
	LazyLoading.Item = LazyLoading.Item|| {};	
	LazyLoading.ResultCounter = LazyLoading.ResultCounter || {};
	LazyLoading.Functions = LazyLoading.Functions || {};
	
	//Functions
	
	//#1- Retrieves list items for current page.
	LazyLoading.Functions.loadItems = function() { 	   
		 //Set the next list items collection position - First time the position will be null 
	    LazyLoading.CamlQuery.set_listItemCollectionPosition(LazyLoading.Position);     
	    LazyLoading.SpItems = LazyLoading.List.getItems(LazyLoading.CamlQuery); 
	    LazyLoading.Context.load(LazyLoading.SpItems); 
	    LazyLoading.Context.executeQueryAsync(onLazyLoadSuccess,onLazyLoadFail); 	    
	}
	
	//#2- Manage Page Control - pagination
	LazyLoading.Functions.managePagerControl = function() {  
	    if (LazyLoading.SpItems.get_listItemCollectionPosition()) { 	    
	        LazyLoading.NextPagingInfo = LazyLoading.SpItems.get_listItemCollectionPosition().get_pagingInfo(); 	    
	    } else { 	    
	        LazyLoading.NextPagingInfo = null; 	    
	    }   
	}

})(LazyLoading);
