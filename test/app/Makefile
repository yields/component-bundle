
META= $(wildcard component.json lib/*/*.json)
SRC= $(wildcard lib/*/*.js)
CSS= $(wildcard lib/*/*.css)

bundles: components $(SRC) $(CSS)
	@../../bin/component-bundle --use plugin,hbs, --append

components: $(META)
	@component install

clean:
	rm -rf bundles components

.PHONY: clean
