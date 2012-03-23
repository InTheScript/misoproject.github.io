var ds = new Miso.Dataset({
  importer: Miso.Importers.GoogleSpreadsheet,
  parser : Miso.Parsers.GoogleSpreadsheet,
  key : "0Asnl0xYK7V16dFpFVmZUUy1taXdFbUJGdGtVdFBXbFE",
  worksheet: "1"
});

ds.fetch({ 
  success: function() {
    console.log(ds.columnNames());
  },
  error : function() {
    console.log("Are you sure you are connected to the internet?");
  }
});