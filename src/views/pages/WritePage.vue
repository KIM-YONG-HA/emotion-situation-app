<template>





<div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 class="text-3xl font-bold text-center text-gray-800 my-10">상담 글 작성</h2>
        
        <form class="space-y-6" action="write_analysis.php" method="post">

            <!-- 개인정보 수집 및 이용 동의 -->
            <h3 class="font-semibold text-gray-800 text-xl">개인정보 수집 및 이용 동의</h3>
            <div class="p-4 border rounded-lg bg-gray-50 max-h-60 overflow-y-auto">
                <p class="text-sm text-gray-600">마음체크(maum check)는 원활한 상담 제공 및 AI 기반 서비스 개선을 위해 개인정보를 수집·이용합니다.</p>
                <p class="text-sm text-gray-600 font-semibold">1. 개인정보 수집 목적</p>
                <ul class="text-sm text-gray-600 list-disc ml-5">
                    <li>원활한 상담 서비스 제공</li>
                    <li>자연어처리(NLP) 기술을 활용한 감정 분석 및 패턴 인식</li>
                    <li>연구 및 서비스 개선</li>
                </ul>
                <p class="text-sm text-gray-600 font-semibold">2. 수집 항목</p>
                <p class="text-sm text-gray-600">- 필수 항목: 상담 내용</p>
                <p class="text-sm text-gray-600">- 선택 항목: 이름 또는 닉네임, 거주지, 나이</p>
                <p class="text-sm text-gray-600 font-semibold">3. 개인정보 및 민감정보 처리 방식</p>
                <p class="text-sm text-gray-600">- 수집된 개인정보 및 민감정보는 비식별화 처리 후 저장됩니다.</p>
                <p class="text-sm text-gray-600 font-semibold">4. 개인정보 보유 및 이용 기간</p>
                <p class="text-sm text-gray-600">- 상담 데이터는 n년 동안 보관되며, 이후 완전히 삭제됩니다.</p>
            </div>
            <div class="mt-2 space-x-4">
                <label class="inline-flex items-center">
                    <input type="radio" name="privacy_agreement" value="agree" class="form-radio text-blue-600">
                    <span class="ml-2">동의</span>
                </label>
                <label class="inline-flex items-center">
                    <input type="radio" name="privacy_agreement" value="disagree" class="form-radio text-red-600">
                    <span class="ml-2">비동의</span>
                </label>
            </div>
            
            <!-- 상담 정보 연계 동의 -->
            <h3 class="font-semibold text-gray-800  text-xl">상담 정보 연계 동의</h3>
            <div class="p-4 border rounded-lg bg-gray-50 max-h-60 overflow-y-auto">
                <p class="text-sm text-gray-600">이용자가 작성한 상담 글을 보다 적절한 상담 서비스를 제공할 수 있도록 유관 기관으로 연계할 수 있습니다.</p>
                <p class="text-sm text-gray-600 font-semibold">1. 연계 목적</p>
                <p class="text-sm text-gray-600">- 가까운 상담 기관에서 지속적인 지원을 받을 수 있도록 상담 글을 연계합니다.</p>
                <p class="text-sm text-gray-600">- 이용자의 편의를 위해 적절한 상담 기관을 추천하고 상담을 이어갈 수 있도록 지원합니다.</p>
                <p class="text-sm text-gray-600 font-semibold">2. 연계 대상 기관</p>
                <p class="text-sm text-gray-600">- 정신 건강 상담 기관 및 관련 기관</p>
                <p class="text-sm text-gray-600">- 의료 및 심리 상담 지원 기관</p>
                <p class="text-sm text-gray-600">- 지역 내 상담 서비스 제공 기관</p>
            </div>
            <div class="mt-2 space-x-4">
                <label class="inline-flex items-center">
                    <input type="radio" name="transfer_agreement" value="agree" class="form-radio text-blue-600">
                    <span class="ml-2">동의</span>
                </label>
                <label class="inline-flex items-center">
                    <input type="radio" name="transfer_agreement" value="disagree" class="form-radio text-red-600">
                    <span class="ml-2">비동의</span>
                </label>
            </div>




 <!-- 제3자 제공 동의 -->
            <h3 class="font-semibold text-gray-800 text-xl">제3자 제공 동의</h3>
            <div class="p-4 border rounded-lg bg-gray-50 max-h-60 overflow-y-auto">
                <p class="text-sm text-gray-600">이용자의 안전을 위해 필요할 경우, 최소한의 정보가 관계 기관에 제공될 수 있습니다.</p>
                <p class="text-sm text-gray-600 font-semibold">1. 제공 대상 기관</p>
                <p class="text-sm text-gray-600">- 경찰, 소방서, 병원 및 기타 응급 대응 기관</p>
                <p class="text-sm text-gray-600 font-semibold">2. 제공 목적</p>
                <p class="text-sm text-gray-600">- 상담 내용을 토대로 긴급 개입이 필요한 경우 즉시 관련 기관에 신고할 수 있습니다.</p>
                <p class="text-sm text-gray-600">- 이는 신속한 대응을 위한 조치입니다.</p>
                <p class="text-sm text-gray-600 font-semibold">3. 제공 정보 항목</p>
                <p class="text-sm text-gray-600">- 긴급 대응이 필요한 경우, 상담 기록 일부와 필수적인 정보(닉네임, 위치 정보 등)가 제공될 수 있습니다.</p>
                <p class="text-sm text-gray-600">- 단, 필요 최소한의 정보만 제공되며, 법적 요건을 준수하여 처리됩니다.</p>
            </div>
            <div class="mt-2 space-x-4">
                <label class="inline-flex items-center">
                    <input type="radio" name="third_party_agreement" value="agree" class="form-radio text-blue-600">
                    <span class="ml-2">동의</span>
                </label>
                <label class="inline-flex items-center">
                    <input type="radio" name="third_party_agreement" value="disagree" class="form-radio text-red-600">
                    <span class="ml-2">비동의</span>
                </label>
            </div>


            <div class="flex items-center space-x-4 mb-4">
  <div class="w-2/12">
    <label class="block text-sm font-medium text-gray-700">감정 선택</label>
  </div>
  <div class="w-10/12 flex flex-wrap gap-2">
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM01" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">기쁨</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM02" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">슬픔</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM03" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">분노</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM04" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">혐오</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM05" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">불안</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM06" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">공포</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM07" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">당황/놀람</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM08" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">수치심</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM09" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">절망감</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM10" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">죄책감</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM11" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">우울/외로움</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="emotions[]" value="EM12" class="hidden peer">
      <span class="peer-checked:bg-blue-100 peer-checked:text-blue-800 peer-checked:border-blue-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">기타</span>
    </label>
  </div>
</div>






<div class="flex items-center space-x-4 mb-4">
  <div class="w-2/12">
    <label class="block text-sm font-medium text-gray-700">상황 선택</label>
  </div>
  <div class="w-10/12 flex flex-wrap gap-2">
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI01" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">가족 및 대인관계</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI02" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">학업 및 진로</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI03" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">직장 및 업무 스트레스</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI04" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">정신 건강</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI05" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">학교폭력 및 학대</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI06" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">중독 문제</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI07" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">경제적 어려움</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI08" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">신체 건강 문제</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI09" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">죽음과 상실</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI10" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">인지 기능 관련 어려움</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI11" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">민감한 피해 경험</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI12" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">연애/결혼/출산</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" name="situations[]" value="SI13" class="hidden peer">
      <span class="peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:border-green-300
                   bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm">기타</span>
    </label>
  </div>
</div>








<div class="flex items-start space-x-4 mb-4">
  <div class="w-2/12">
    <label for="hashtag-input" class="block text-sm font-medium text-gray-700">해시태그</label>
  </div>
  <div class="w-10/12">
    <input
      type="text"
      id="hashtag-input"
      v-model="hashtagInput"
      @keydown.enter.prevent="addHashtag"
      placeholder="나의 상황을 잘 나타내는 키워드 입력 후 Enter"
      class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
    />

    <div class="mt-2 flex flex-wrap gap-2">
      <span
        v-for="tag in hashtags"
        :key="tag"
        class="hashtag-item"
      >
        #{{ tag }}
        <input type="hidden" name="hashtags[]" :value="tag">
        <button type="button" @click="removeTag(tag)">×</button>
      </span>
    </div>
  </div>
</div>

 
  






            <!-- 제목 -->
            <div class="flex items-center space-x-4">
                <div class="w-2/12">
                    <label for="title" class="block text-sm font-medium text-gray-700">제목</label>
                </div>
                <div class="w-10/12">
                    <input type="text" id="title" name="title" placeholder="상담 제목을 작성하세요" 
                        class="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" >
                </div>
            </div>

            <!-- 이름 (닉네임) -->
            <div class="flex items-center space-x-4">
                <div class="w-2/12">
                    <label for="nickname" class="block text-sm font-medium text-gray-700">이름 (닉네임)</label>
                </div>
                <div class="w-10/12">
                    <input type="text" id="nickname" name="nickname" placeholder="닉네임을 입력하세요"
                        class="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" >
                </div>
            </div>

            <!-- 거주지 -->
            <div class="flex items-center space-x-4">
                <div class="w-2/12">
                    <label for="location" class="block text-sm font-medium text-gray-700">거주지</label>
                </div>
                <div class="w-10/12">
                    <input type="text" id="location" name="location" placeholder="거주지 입력" 
                        class="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" >
                </div>
            </div>

            <!-- 나이 -->
            <div class="flex items-center space-x-4">
                <div class="w-2/12">
                    <label for="age" class="block text-sm font-medium text-gray-700">나이</label>
                </div>
                <div class="w-10/12">
                  <input type="number" id="age" name="age" placeholder="나이를 입력하세요" class="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" oninput="this.value = this.value.slice(0, 3)">

                </div>
            </div>







            <!-- 상담글 -->
            <div class="flex items-center space-x-4">
                <div class="w-2/12">
                    <label for="content" class="block text-sm font-medium text-gray-700">상담글</label>
                </div>
                <div class="w-10/12 prose">
                    <!-- <textarea id="editor" name="content" rows="6" placeholder="상담 내용을 자세히 작성해 주세요"
                        class="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" ></textarea> -->
                        <ckeditor :editor="ClassicEditor" v-model="form.content" :config="editorConfig" />

                </div>
            </div>



            <!-- 비밀번호 -->
            <div class="flex items-center space-x-4">
                <div class="w-2/12">
                    <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
                </div>
                <div class="w-10/12">
                    <input type="password" id="password" name="password" 
                        class="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" >
                </div>
            </div>





            <!-- 제출 버튼 -->
            <div>
                <input type="submit" class="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500" value="작성 완료">
            </div>
        </form>
    </div>



</template>


<script setup>
import { ref } from 'vue'

const hashtagInput = ref('')
const hashtags = ref([])

const addHashtag = () => {
  const raw = hashtagInput.value.trim()
  if (!raw) return

  // 특수문자 제거 (한글, 영문, 숫자, 공백, #만 허용)
  const sanitized = raw.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\\s#]/g, '')
  const entries = sanitized.split('#').map(t => t.trim()).filter(t => t)

  entries.forEach(tag => {
    if (!hashtags.value.includes(tag)) {
      hashtags.value.push(tag)
    }
  })

  hashtagInput.value = ''
}

const removeTag = (tag) => {
  hashtags.value = hashtags.value.filter(t => t !== tag)
}
</script>


 
<style>
.hashtag-item {
  background-color: #f0f0f0;
  color: #333;
  border-radius: 20px;
  padding: 5px 15px;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
}
.hashtag-item button {
  background: none;
  border: none;
  color: #999;
  font-weight: bold;
  margin-left: 8px;
  cursor: pointer;
}
.hashtag-item button:hover {
  color: #e00;
}
</style>



