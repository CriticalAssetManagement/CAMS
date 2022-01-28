<template>
  <v-card>
    <v-card-title>User Registration</v-card-title>

    <v-stepper v-model="el">
      <!-- Stepper Header -->
      <v-stepper-header>
        <v-stepper-step :complete="el > 1" step="1">
          User Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="el > 2" step="2">
          Contact Information
        </v-stepper-step>
      </v-stepper-header>

      <!-- Stepper Items -->
      <v-stepper-items>
        <!-- Step 1: User Information-->
        <v-stepper-content step="1">
          <v-card>
            <!-- First & Last Name -->
            <v-row justify="space-between">
              <v-col cols="12" sm="6">
                <v-text-field
                  color="purple darken-2"
                  :counter="max"
                  label="Your First Name:"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  color="purple darken-2"
                  :counter="max"
                  label="Your Last Name:"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- User Position -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="max"
                  label="Job Title:"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- Organization -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="max"
                  label="Organization:"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-btn color="primary" @click="el = 2">
              Next
            </v-btn>
          </v-card>
        </v-stepper-content>

        <!-- Step 2: User Contact Information -->
        <v-stepper-content step="2">
          <v-card>
            <!-- Phone Number -->
            <!-- TODO: Include Country Code -->
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  color="purple darken-2"
                  :counter="maxPhone"
                  label="Phone Number:"
                  required
                ></v-text-field>
              </v-col>

              <!-- Email Address -->
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="maxEmail"
                  label="Email Address:"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- TODO: Spacing between buttons needed -->
            <v-btn @click="el = 1">
              Previous
            </v-btn>
            <v-btn color="primary">
              Register
            </v-btn>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      el: 1,
      max: 60,
      maxPhone: 15,
      maxEmail: 100,
    };
  },
};
</script>

<style></style>
