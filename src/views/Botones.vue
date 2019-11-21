<template>
	<div>
		<v-container>
			<v-layout wrap>
				<v-flex xs12>
					
					<v-btn >Hola</v-btn>

					<v-btn class="ml-4" color="deep-purple accent-4" dark>Hola</v-btn>

					<v-btn class="ml-4" text>sin fondo</v-btn>

					<v-btn class="ml-4" color="warning" large>Largo</v-btn>
					<v-btn class="ml-4" color="warning" small>Pequeño</v-btn>
					<v-btn class="ml-4" color="warning" large disabled>Largo</v-btn>

					<v-btn class="ml-4" color="error" depressed>Error</v-btn>

					<v-btn class="ml-4">
						<v-icon>mdi-heart</v-icon>
					</v-btn>

					<v-btn class="ml-4" color="primary" icon text>
						<v-icon>mdi-heart</v-icon>
					</v-btn>

					<v-btn class="ml-4" color="primary" fab>
						<v-icon>mdi-heart</v-icon>
					</v-btn>

					<v-btn class="ml-4" color="primary" fab small>
						<v-icon>mdi-heart</v-icon>
					</v-btn>

					<v-btn class="ml-4" color="blue" dark>
						texto
						<v-icon>mdi-heart</v-icon>
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>

	</div>
</template>

<script>
export default {
	
}
</script>