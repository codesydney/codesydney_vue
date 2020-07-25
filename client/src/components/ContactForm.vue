<template>
  <div id="contact-form">
    <div class>
      <a href="mailto:info@code.sydney?Subject=Enquiry" target="_top">info@code.sydney</a>
    </div>

    <form method="POST" action="/">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fa', 'user']" />
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Name" name="name" required />
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Email" name="email" required />
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fa', 'pencil-alt']" />
          </span>
        </div>
        <textarea class="form-control" placeholder="Message" rows="5" name="message" required></textarea>
      </div>

      <button type="submit" class>Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact-form {
  flex: 0 0 75%;
  max-width: 75%;
  display: flex;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

h2 .h3 {
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500px;
  line-height: 1.2;
  color: inherit;
}

a {
  background-color: transparent;
  text-decoration: none;
  &:hover {
    color: #205e6b;
    text-decoration: underline;
  }
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  text-align: center;
}

.fa,
.fab,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
.input-group-prepend {
  margin-right: -1px;
}
.input-group-prepend,
.input-group-append {
  display: flex;
}
*,
::before,
::after {
  box-sizing: border-box;
}

.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group > .form-control,
.input-group > .custom-select,
.input-group > .custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button,
input {
  overflow: visible;
}

button {
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #297889;
    border-color: #26707f;
    text-decoration: none;
  }
}
button,
select {
  text-transform: none;
}

nput,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>
