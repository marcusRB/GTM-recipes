<script>
jQuery('meta[name="description"]').remove();
jQuery('title').remove();
var md_en = document.createElement('meta');
md_en.name = 'description';
md_en.content = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." //change this
jQuery('head').append(md_en);
var tt_en = document.createElement('title');
tt_en.text = "Paradigmate Shopping Online";
jQuery('head').append(tt_en);
</script>
