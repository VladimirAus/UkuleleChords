// JavaScript Document
$(document).ready(function() {
	
	var chords = [
	[['C', '', ''],[0,1,2,3],[0,0,0,3]],
	[['C', '', '7'],[0,1,2,3],[0,0,0,1]],
	[['C', 'min', ''],[0,1,2,3],[0,3,3,3]],
	[['C', 'min', '7'],[0,1,2,3],[3,3,3,3]],
	[['C', 'dim', ''],[0,1,2,3],[2,3,2,3]],
	[['C', 'aug', ''],[0,1,2,3],[1,0,0,3]],
	[['C', '', '6'],[0,1,2,3],[0,0,0,0]],
	[['C', 'maj', '7'],[0,1,2,3],[0,0,0,2]],
	[['C', '', '9'],[0,1,2,3],[0,2,0,1]],
	[['D', 'min', '7'],[0,1,2,3],[2,2,1,3]]
	];
	
	// Add options to select
	for (var i=0; i < chords.length; i++) {
		var chordName = chords[i][0];
		var opt = $("<option></option>").attr("value", i).text(chordName[0] + chordName[1] + chordName[2]);
		$('#chord-select').append(opt);
	}
	
	// when chord changes
	$('#chord-select').change(function() {
		drawNotes(chords[$(this).val()][2]);
	});
	
	function drawNotes(fingering) {
		// Draw fretboard
		var htmlFretboard = '';
		for  (var g=0; g < 5; g++) {
			extraClass = 'fret-br ';
			for  (var f=0; f < fingering.length; f++) {
				htmlFretboard += '<div class="'+extraClass+'fret-space"></div>';
				extraClass = '';
			}
		}
		$('#fretboard-bg').html(htmlFretboard);
		
		// Draw notes
		var htmlNotes = '';
		for  (var g=0; g < 5; g++) {
			extraClass = 'fret-br ';
			//notes = 
			for  (var f=0; f < fingering.length; f++) {
				result = (fingering[f] == g)?'0':'';
				htmlNotes += '<div class="'+extraClass+'fret-note">'+result+'</div>';
				extraClass = '';
			}
		}
		$('#fretboard-notes').html(htmlNotes);
	}
	
	

});