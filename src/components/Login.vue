<template>
  <div class="index">
    <div id="indexLizi"></div>
    <div class="full-height row justify-center">
      <div class="column justify-center" style="width:300px">
        <div style="text-align:left">
          <!-- <q-field icon="account_circle" :error="$v.form.username.$error" error-label="Oops, we got an error.">
            <q-input v-model="form.username" :float-label="$t('Please input Username')" />
          </q-field> -->
          <q-input dark type="text" v-model="form.username" label="账户" clearable :error="$v.form.username.$error">
            <template v-slot:prepend>
              <q-icon name="account_circle" />
            </template>
          </q-input>

          <q-input dark :type="isPwd ? 'password' : 'text'" v-model="form.password" label="密码" clearable :error="$v.form.password.$error">
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
        </div>
        <div class="row justify-around q-mt-md">
          <q-btn color="primary" :loading="loading" @click="submit">
            Login
            <span slot="loading"> <q-spinner-hourglass class="on-left" />Loading... </span>
          </q-btn>
          <q-btn color="negative" @click="clear">Reset</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import THREE from '../libs/three/three';

export default {
  data() {
    return {
      form: {
        username: 'wangfy',
        password: '789',
      },
      isPwd: true,
      loading: false,
    };
  },
  validations: {
    form: {
      username: { required },
      password: { required },
    },
  },
  methods: {
    liziInit() {
      const SCREEN_WIDTH = window.innerWidth;
      const SCREEN_HEIGHT = window.innerHeight;
      const SEPARATION = 90;
      const AMOUNTX = 50;
      const AMOUNTY = 50;
      let container = null;
      let particles = [];
      let particle = 0;
      let count = 0;
      let camera = 0;
      let scene = 0;
      let renderer = 0;
      let mouseX = 0;
      // eslint-disable-next-line
      let mouseY = 0;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      let mousemovetimer = null;
      function onMouseMove(event) {
        window.clearTimeout(mousemovetimer);
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
        mousemovetimer = null;
      }
      function onDocumentMouseMove(event) {
        if (!mousemovetimer) mousemovetimer = window.setTimeout(onMouseMove, 50, event);
      }
      function onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
          event.preventDefault();
          mouseX = event.touches[0].pageX - windowHalfX;
          mouseY = event.touches[0].pageY - windowHalfY;
        }
      }
      function loop() {
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        // camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
        camera.position.y = 364;
        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix += 1) {
          for (let iy = 0; iy < AMOUNTY; iy += 1) {
            // eslint-disable-next-line
            particle = particles[i++];
            particle.position.y = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
            particle.scale.x = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
            particle.scale.y = particle.scale.x;
          }
        }
        renderer.render(scene, camera);
        count += 0.1;
      }
      function init() {
        container = document.createElement('div');
        container.style.position = 'relative';
        container.style.top = '200px';
        document.getElementById('indexLizi').appendChild(container);
        camera = new THREE.Camera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
        camera.position.z = 1000;
        scene = new THREE.Scene();
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        particles = [];
        let i = 0;
        const material = new THREE.ParticleCircleMaterial(0x097bdb, 1);
        for (let ix = 0; ix < AMOUNTX; ix += 1) {
          for (let iy = 0; iy < AMOUNTY; iy += 1) {
            particle = new THREE.Particle(material);
            // eslint-disable-next-line
            particles[i++] = particle;
            particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
            particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
            scene.add(particle);
          }
        }
        count = 0;
        container.appendChild(renderer.domElement);
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('touchmove', onDocumentTouchMove, false);
      }
      init();
      this.interval = setInterval(loop, 1000 / 40);
      // this.interval = setInterval(loop, 1000);
    },
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        this.$q.notify({
          type: 'negative',
          message: 'Account password cannot be empty!',
        });
        return;
      }
      this.loading = true;
      this.$store
        .dispatch('Personal/LoginByUserName', this.form)
        .then(() => {
          console.log(789);
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
          this.loading = false;
          console.log(this.$router.push);
          this.$router.push({ name: 'Index' });
        })
        .catch(() => {
          this.$q.notify({
            type: 'negative',
            message: '用户/密码错误 !',
          });
          this.loading = false;
        });
    },
    clear() {
      this.form.username = '';
      this.form.password = '';
      this.$v.form.$reset();
    },
  },
  computed: {},
  mounted() {
    this.liziInit();
  },
  beforeDestroy() {
    if (this.interval) clearInterval(this.interval);
  },
};
</script>

<style scoped>
#login-app {
  background: none;
}
.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #141a48;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.index h1 {
  height: 150px;
}

.index h1 img {
  height: 100%;
}

.index h2 {
  color: #666;
  margin-bottom: 200px;
}

.index h2 p {
  margin: 0 0 50px;
}

.index .ivu-row-flex {
  height: 100%;
}

#indexLizi {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

p {
  color: white;
}
</style>
